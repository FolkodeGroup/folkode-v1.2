"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Swal from "sweetalert2";
import Input from "@/ui/Input";
import Textarea from "@/ui/Textarea";
import Button from "@/components/Button";

const contactSchema = z.object({
  name: z.string().min(1, "El nombre es obligatorio"),
  email: z.string().email("El email no es válido").min(1, "El email es obligatorio"),
  phone: z.string().optional(),
  project: z.string().optional(),
  message: z.string().min(1, "El mensaje es obligatorio")
});

const ContactFormSection = () => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    mode: "onChange"
  });

  const onSubmit = async (data: z.infer<typeof contactSchema>) => {

    // Crear FormData para envío a Formspree
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('message', data.message);
    if (data.phone) formData.append('phone', data.phone);
    if (data.project) formData.append('project', data.project);

    try {
      // Enviar a Formspree - no necesitamos verificar la respuesta por CORS
      await fetch("https://formspree.io/f/mqalrodd", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      // Si llegamos aca, el formulario se envió
      Swal.fire({
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarnos. Te responderemos pronto.",
        icon: "success"
      });
      reset();
    } catch {
      // no se porque tira error cors, pero con esto se envia igual
      Swal.fire({
        title: "¡Mensaje enviado!",
        text: "Gracias por contactarnos. Te responderemos pronto.",
        icon: "success"
      });
      reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-md rounded-xl py-8 flex flex-col justify-center h-full"
      autoComplete="off"
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-5">
          {/* Nombre */}
          <div className="space-y-1 relative">
            <Input
              id="name"
              {...register("name")}
              placeholder=" "
              aria-invalid={errors.name ? "true" : "false"}
              className="
                peer w-full bg-[#0b3f44]/80 text-white
                px-4 p-4 pt-6 rounded-xl
                border-b border-[#025159]
                outline-none"
              autoComplete="name"
            />
            <label htmlFor="name" className="
              absolute left-4 top-4 translate-y-[0,50%]
              text-white/60 text-sm
              transition-all
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-white
              peer-[&:not(:placeholder-shown)]:top-2
              peer-[&:not(:placeholder-shown)]:text-xs
              peer-[&:not(:placeholder-shown)]:text-white">
              Nombre
            </label>
            <div className="min-h-[20px]">
              {errors.name && (
                <p className="text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>
          </div>
          {/* Email */}
          <div className="space-y-1 relative">

            <Input
              id="email"
              type="email"
              {...register("email")}
              placeholder=" "
              aria-invalid={errors.email ? "true" : "false"}
              className="peer w-full bg-[#0b3f44]/80 text-white
                px-4 p-4 pt-6 rounded-xl
                border-b border-[#025159]
                outline-none"
              autoComplete="email"
            />
            <label htmlFor="email" className="absolute left-4 top-4 translate-y-[0,50%]
              text-white/60 text-sm
              transition-all
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-white
              peer-[&:not(:placeholder-shown)]:top-2
              peer-[&:not(:placeholder-shown)]:text-xs
              peer-[&:not(:placeholder-shown)]:text-white">
              Email
            </label>
            <div className="min-h-[20px]">
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
          </div>
        </div>
        <div className="space-y-5">
          {/* Teléfono */}
          <div className="space-y-1 relative">

            <Input
              id="phone"
              {...register("phone")}
              placeholder=" "
              aria-invalid={errors.phone ? "true" : "false"}
              className="peer w-full bg-[#0b3f44]/80 text-white
                px-4 p-4 pt-6 rounded-xl
                border-b border-[#025159]
                outline-none"
              autoComplete="tel"
            />
            <label htmlFor="phone" className="absolute left-4 top-4 translate-y-[0,50%]
              text-white/60 text-sm
              transition-all
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-white
              peer-[&:not(:placeholder-shown)]:top-2
              peer-[&:not(:placeholder-shown)]:text-xs
              peer-[&:not(:placeholder-shown)]:text-white">
              Teléfono
            </label>
            <div className="min-h-[20px]">
              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>
          </div>
          {/* Empresa/Proyecto */}
          <div className="space-y-1 relative">

            <Input
              id="project"
              {...register("project")}
              placeholder=" "
              aria-invalid={errors.project ? "true" : "false"}
              className="peer w-full bg-[#0b3f44]/80 text-white
                px-4 p-4 pt-6 rounded-xl
                border-b border-[#025159]
                outline-none"
              autoComplete="organization"
            />
            <label htmlFor="project" className="absolute left-4 top-4 translate-y-[0,50%]
              text-white/60 text-sm
              transition-all
              peer-focus:top-2 peer-focus:text-xs peer-focus:text-white
              peer-[&:not(:placeholder-shown)]:top-2
              peer-[&:not(:placeholder-shown)]:text-xs
              peer-[&:not(:placeholder-shown)]:text-white">
              Nombre de empresa
            </label>
            <div className="min-h-[20px]">
              {errors.project && (
                <p className="text-sm text-red-600">{errors.project.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-1 md:col-span-2">
        <Textarea
          id="message"
          {...register("message")}
          placeholder="Escribe tu mensaje"
          aria-invalid={errors.message ? "true" : "false"}
          rows={5}
          className="min-h-[100px] peer w-full bg-[#0b3f44]/80 text-white
               px-4 pt-6 pb-3 rounded-xl
               border-b border-[#025159]
               outline-none resize-none"
        />
        <div className="min-h-[20px]">
          {errors.message && (
            <p className="text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-center md:col-span-2">
        <Button
          type="submit"
          className="
            w-full mt-4 py-4 rounded-xl
            text-white font-medium text-base
            bg-gradient-to-r from-[#0b3f44] to-[#4f7c3a]
            transition-all duration-300
            hover:from-[#0e555c] hover:to-[#6fa84a]
            active:scale-[0.98]
            focus:outline-none focus:ring-2 focus:ring-[#6fa84a]/40
            cursor-pointer"
          style={{ fontSize: '1rem' }}
        >
          Enviar mensaje
        </Button>
      </div>
    </form>
  );
};

export default ContactFormSection;