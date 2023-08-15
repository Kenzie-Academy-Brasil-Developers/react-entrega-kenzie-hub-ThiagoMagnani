import { z } from "zod";

export const formSchemaReg = z
  .object({
    name: z
      .string()
      .nonempty("O nome é obrigatório")
      .min(2, "É necessário pelo menos dois caracteres"),
    email: z
      .string()
      .nonempty("E-mail é obrigatório")
      .email("Forneça um e-mail válido"),
    password: z
      .string()
      .nonempty("Senha é obrigatória")
      .min(8, "É necessário pelo menos oito caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
    confirmPassword: z.string().nonempty("É necessário confirmar a senha"),
    bio: z
      .string()
      .nonempty("Bio é obrigatório")
      .min(10, "É necessário pelo menos 10 caracteres"),
    contact: z
      .string()
      .nonempty("Número de contato é obrigatório")
      .min(11, "É necessário pelo menos 11 caracteres"),
    course_module: z.string().nonempty("Selecionar o módulo é obrigatório"),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
