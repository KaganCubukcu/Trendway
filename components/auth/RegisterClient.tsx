"use client";
import React, { useEffect } from "react";
import AuthContainer from "@/containers/auth";
import Heading from "@/components/general/Heading";
import Input from "@/components/general/Input";
import Button from "@/components/general/Button";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { UserProps } from "@/components/header/interfaces/UserProps.interface";

const RegisterClient: React.FC<UserProps> = ({ currentUser }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios.post("/api/register", data).then(() => {
      toast.success("Kayıt Başırılı Bir Şekilde Oluşturuldu");
      signIn("credentials", {
        email: data.email,
        password: data.password,
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
    });
  };

  useEffect(() => {
    if (currentUser) {
      router.push("/cart");
      router.refresh();
    }
  }, [currentUser, router]);

  return (
    <AuthContainer>
      <div className="w-full md:w-[500px] p-3 shadow-lg rounded-md">
        <Heading text="Register" />
        <Input
          id="name"
          placeholder="Ad"
          type="text"
          register={register}
          errors={errors}
          required
        />
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

        <Button text="Register" onClick={handleSubmit(onSubmit)} />
        <span className="flex justify-center my-2">OR</span>
        <Button
          text="Register with Google"
          icon={FaGoogle}
          outline
          onClick={() => {}}
        />
        <div>
          <Link href="/login">
            <span>Login</span>
          </Link>
        </div>
      </div>
    </AuthContainer>
  );
};

export default RegisterClient;
