import { useState, useRef } from "react";
import { useMutation } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineSwapRight } from "react-icons/ai";
// import contactOperations from "../../graphqlOperations/contact";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

interface Inputs {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactMutation {
  createContact: {
    name: string;
  };
}

const isValidEmail = (email: string) =>
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  // const [sendMessage, { loading }] = useMutation<ContactMutation, Inputs>(
  //   contactOperations.Mutation.sendMessage,
  //   {
  //     onCompleted({ createContact }) {
  //       toast.success(`Thanks for contacting me ${createContact.fullName}`, {
  //         duration: 5000,
  //       });
  //       reset({ fullName: "", email: "", message: "" });
  //     },
  //     onError() {
  //       toast.error("Server error. Try again later");
  //     },
  //   }
  // );

  function handleEmailValidation(email: string) {
    const isValid = isValidEmail(email);
    if (!isValid) toast.error("Invalid Email");
    return isValid;
  }
  const [serverError, setServerError] = useState<string | boolean>("");
  const [serverSuccess, setServerSuccess] = useState<string | boolean>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const currentForm = useRef<any>(null);
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICEID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATEID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsLoading(true);
    emailjs
      .sendForm(
        serviceId as string,
        templateId as string,
        currentForm.current,
        publicKey
      )
      .then(
        (result) => {
          setIsLoading(false);
          if (result.status === 200 && result.text) {
            setServerError(false);
            setServerSuccess("Email successfully sent!");
          }
        },
        (error) => {
          setIsLoading(false);
          setServerSuccess(false);
          setServerError("Something is wrong while sending the message!");
        }
      );
  };

  return (
    // <form className="p-12" onSubmit={handleSubmit(onSubmit)} ref={currentForm}>
    <form className="p-12" action="https://api.web3forms.com/submit" method="POST">
      <input type="hidden" name="access_key" value="80c0e4a3-3032-4533-b98c-4a7a9217f543"></input>
      <div className="grid grid-cols-1 sm:grid-cols-2 mb-8 gap-8">
        <div>
          <input
            {...register("name", { required: true })}
            type="text"
            name="name"
            placeholder="Full Name"
            className="w-full bg-transparent placeholder:text-2xl placeholder:text-gray-400 text-main-orange text-2xl py-4 focus:border-main-orange focus:placeholder:text-gray-300 px-6 rounded-none border-solid border-2 border-gray-800 mb-1"
          />
          {errors.name && (
            <>
              {errors.name.type === "required" && (
                <p className="bg-red-500 bg-opacity-5 text-center text-base text-red-500">
                  Name is required!
                </p>
              )}
            </>
          )}
        </div>
        <div>
          <input
            {...register("email", {
              required: true,
              validate: handleEmailValidation,
            })}
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full bg-transparent placeholder:text-2xl placeholder:text-gray-400 text-main-orange text-2xl py-4 focus:border-main-orange focus:placeholder:text-gray-300 px-6 rounded-none border-solid border-2 border-gray-800 mb-1"
          />
          {errors.email && (
            <>
              {errors.email.type === "required" && (
                <p className="bg-red-500 bg-opacity-5 text-center text-base text-red-500">
                  Email is required!
                </p>
              )}
              {errors.email.type === "pattern" && (
                <p className="bg-red-500 bg-opacity-5 text-center text-sm text-red-500">
                  Invalid email address!
                </p>
              )}
            </>
          )}
        </div>
      </div>
      <div className="mb-8">
        <input
          {...register("subject", { required: true })}
          type="text"
          placeholder="Subject"
          className="w-full bg-transparent placeholder:text-2xl placeholder:text-gray-400 text-main-orange text-2xl py-4 focus:border-main-orange focus:placeholder:text-gray-300 px-6 rounded-none border-solid border-2 border-gray-800 mb-1"
        />
        {errors.subject && (
          <>
            {errors.subject.type === "required" && (
              <p className="bg-red-500 bg-opacity-5 text-center text-base text-red-500">
                Subject is required!
              </p>
            )}
          </>
        )}
      </div>
      <div>
        <textarea
          {...register("message", { required: true })}
          name="message"
          placeholder="Your Message"
          className="w-full resize-y h-60 bg-transparent placeholder:text-2xl placeholder:text-gray-400 text-main-orange text-2xl py-4 focus:border-main-orange focus:placeholder:text-gray-300 px-6 rounded-none border-solid border-2 border-gray-800 mb-1"
        ></textarea>
        {errors.message && (
          <>
            {errors.message.type === "required" && (
              <p className="bg-red-500 bg-opacity-5 text-center text-base text-red-500">
                Message is required!
              </p>
            )}
          </>
        )}
      </div>
      <div className="w-[22rem] h-20 bg-[#0e1422d9] flex justify-center items-center gap-3 text-gray-300 group mt-6 rounded-lg cursor-pointer">
        <button
          type="submit"
          className={`${
            isLoading ? "pointer-events-none" : "group-hover:text-main-orange"
          } uppercase text-2xl font-semibold group-hover:mx-2 transition-all duration-300`}
        >
          {isLoading ? "sending..." : "send message"}
        </button>

        <AiOutlineSwapRight
          className={`text-4xl group-hover:text-main-orange transition-all duration-300 ${
            isLoading ? "hidden" : "block"
          }`}
        />
      </div>
    </form>
  );
}
