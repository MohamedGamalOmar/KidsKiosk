import Input from "@/components/Input";
import { Button } from "@/components/ui/button";
import { REGISTER_FORM } from "@/data/forms";
import { type RegisterFormData, registerSchema } from "@/validation";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMessage from "@/components/ErrorMessage";
import axiosInstance from "@/config/axios.config";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { IAxiosError } from "@/interfaces";
import { useToast } from "@/hooks/use-toast";
import InputGroup from "@/components/InputGroup";

function Signup() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
  });

  const image = watch("image");

  const onSubmit: SubmitHandler<RegisterFormData> = async (formObj) => {
    const formData = new FormData();

    Object.entries(formObj).forEach(([key, value]) => {
      if (key === "image" && value instanceof FileList) {
        formData.append(key, value[0]);
        return;
      }

      if (typeof value === "object" && value !== null) {
        // Handle nested objects
        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
          formData.append(`${key}[${nestedKey}]`, String(nestedValue));
        });
      } else {
        formData.append(key, String(value));
      }
    });
    try {
      const { status } = await axiosInstance.post(
        "/account/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if ([200, 201].includes(status)) {
        navigate("/verificationWithOtp", {
          replace: true,
          state: { email: formObj.email, time: 3 * 60 * 1000 },
        });
        toast({
          title: "Account created successfully, please verify your email",
          description: "We have sent you an email with otp code",
          variant: "success",
        });
      }
    } catch (err) {
      const error = err as AxiosError<IAxiosError>;
      toast({
        title: error.response?.data?.message || "Something went wrong",
        variant: "destructive",
      });
    }
  };

  const renderSignupForm = REGISTER_FORM.map(({ name, placeholder, type }) => (
    <InputGroup
      key={name}
      className={`${
        ["firstName", "secondName"].includes(name)
          ? "w-[48%] mb-[5px]"
          : "w-full mb-[5px]"
      } `}
      {...(type === "file" && {
        image: image instanceof FileList ? image[0] : undefined,
      })}
    >
      <label htmlFor={name}>{placeholder}</label>
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        className="border !p-2 rounded w-full"
        {...register(name)}
        {...(type === "file" && {
          accept: "image/*",
        })}
      />
      <ErrorMessage message={errors[name]?.message} />
    </InputGroup>
  ));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-between flex-wrap gap-3 w-[470px] max-w-full mx-auto md:mx-0"
      data-aos="fade-right"
    >
      {renderSignupForm}

      <Button
        size="lg"
        className=" border disabled:cursor-no-drop disabled:opacity-60 w-full"
        disabled={isSubmitting}
      >
        Sign up
      </Button>
    </form>
  );
}

export default Signup;
