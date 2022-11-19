import { randomInt } from "crypto";
import { useEffect, useState } from "react";

const Contact = () => {
  const [state, setState] = useState<{
    sending: boolean;
    sent: boolean;
  }>({ sending: false, sent: false });

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (state.sent) {
      timeout = setTimeout(
        () => setState({ sending: false, sent: false }),
        4000
      );
    }
    if (state.sending) {
      timeout = setTimeout(
        () => setState({ sending: false, sent: true }),
        3000
      );
    }
    return () => clearTimeout(timeout);
  }, [state]);

  type InputProps = {
    placeholder: string;
    name: string;
    type?: string;
  };

  const Input = (props: InputProps) => {
    const className =
      "w-full rounded-lg p-2 m-2 text-black focus:bg-blue-500 focus:placeholder-black";
    if (props.type === undefined) {
      return (
        <textarea
          name={props.name}
          className={className}
          placeholder={props.placeholder}
          required
        />
      );
    }
    return (
      <input
        type={props.type}
        name={props.name}
        className={className}
        placeholder={props.placeholder}
        required
      />
    );
  };

  return (
    <>
      <div id="contact" className="w-1/2 m-auto pt-20 pb-32">
        <div
          className={
            (state.sending || state.sent ? "" : "hidden") +
            " fixed top-0 right-0 mt-10 mr-10 w-max h-max px-4 py-2 border-4 rounded-xl " +
            (state.sending ? "border-blue-600" : "border-green-600")
          }
        >
          <span>{state.sending ? "Sending email..." : "Email sent!"}</span>
        </div>
        <div className="font-bold text-center mb-10 w-full mx-2">
          <span className="text-2xl sm:text-4xl font-bold w-max mx-auto border-b-2 leading-relaxed">
            Contact Me
          </span>
        </div>
        <form
          id="contact-me-form"
          className=""
          action="https://formsubmit.co/e8c56e9f04255d5319e84b9c89812a05"
          method="POST"
          onSubmit={({ currentTarget }) => {
            currentTarget.submit();
            setTimeout(() => currentTarget.reset(), 50);

            if (state.sending || state.sent) return;
            setState({
              sending: true,
              sent: state.sent,
            });
          }}
        >
          <Input type="text" name="name" placeholder="Your name" />
          <Input type="email" name="email" placeholder="Email address" />
          <Input name="message" placeholder="Your message" />

          <button
            disabled={state.sending || state.sent}
            type="submit"
            className="bg-blue-600 w-full m-2 p-2 rounded-lg text-lg font-semibold flex justify-center"
          >
            <div
              className={
                "border-t-blue-400 animate-spin border-4 rounded-full h-6 w-6 mr-2 my-auto " +
                (state.sending ? "" : "hidden")
              }
            ></div>
            <span>
              {state.sending
                ? "Sending email..."
                : state.sent
                ? "Email sent!"
                : "Send Email"}
            </span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
