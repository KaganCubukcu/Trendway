"use client";

import AuthContainer from "@/containers/auth";
import Heading from "@/components/general/Heading";
import Input from "@/components/general/Input";
import Button from "@/components/general/Button";
import { FaGoogle } from "react-icons/fa";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const LoginClient = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      if (callback?.ok) {
        router.push("/cart");
        router.refresh();
        toast.success("Giriş Yapıldı");
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };
  return (
    <AuthContainer>
      <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
        <Heading text="Login" />

        <Input
          id="email"
          placeholder="Email"
          type="text"
          register={register}
          errors={errors}
          required
        />
        <Input
          id="password"
          placeholder="Parola"
          type="password"
          register={register}
          errors={errors}
          required
        />

        <Button text="Giriş Yap" onClick={handleSubmit(onSubmit)} />
        <span className="flex justify-center my-2">OR</span>
        <Button
          text="Google ile Giriş Yap"
          icon={FaGoogle}
          outline
          onClick={() => {}}
        />
        <div>
          <Link href="/register">
            <span>Kayıt olmak için buraya tıklayın</span>
          </Link>
        </div>
      </div>
    </AuthContainer>
  );
};

export default LoginClient;
