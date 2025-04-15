import { loginThunk } from "@/app/slice/auth/authSlice";
import { useAppDispatch } from "@/app/store";
import Checkbox from "@/components/checkbox";
import InputField from "@/components/fields/InputField"
import { Button } from "@/components/ui/button";
import { Form, Formik } from "formik"

function FormLogin() {

  const dispatch = useAppDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        dispatch(loginThunk(values)).unwrap()
          .finally(() => {
            setSubmitting(false);
          })
      }}
    >
      {({ isSubmitting }) => (

        <Form className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
          <h4 className="mb-2.5 text-4xl font-bold text-slate-950 dark:text-white">
            Iniciar Sesión
          </h4>
          <p className="mb-9 ml-1 text-base text-gray-600">
            Ingresa tu correo y contraseña para acceder.
          </p>

          <InputField
            variant="auth"
            className="mb-3"
            label="Correo electrónico*"
            placeholder="ejemplo@correo.com"
            name="email"
            disabled={isSubmitting}
          />

          <InputField
            variant="auth"
            className="mb-3"
            label="Contraseña*"
            placeholder="Mín. 8 caracteres"
            name="password"
            type="password"
            disabled={isSubmitting}
          />

          <div className="mb-4 flex items-center justify-between px-2">
            <div className="flex items-center">
              <Checkbox />
              <p className="ml-2 text-sm font-medium text-slate-950 dark:text-white">
                Mantener sesión iniciada
              </p>
            </div>
            <a
              className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              href=" "
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
          <Button variant="form" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Iniciando..." : "Iniciar sesión"}
          </Button>
          <div className="mt-4">
            <span className=" text-sm font-medium text-slate-950 dark:text-gray-600">
              ¿Aún no tienes cuenta?
            </span>
            <a
              href=" "
              className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
            >
              Regístrate
            </a>
          </div>
        </Form>
      )}
    </Formik>
  )
}

export default FormLogin;
