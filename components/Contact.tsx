const Contact = () => {
  type InputProps = {
    placeholder: string;
    name: string;
    type?: string;
  };

  const Input = (props: InputProps) => {
    const className = "w-full rounded-lg p-2 m-2 text-black";
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
          }}
        >
          <Input type="text" name="name" placeholder="Your name" />
          <Input type="email" name="email" placeholder="Email address" />
          <Input name="message" placeholder="Your message" />
          <button
            type="submit"
            className="bg-blue-600 w-full m-2 p-2 rounded-lg text-lg font-semibold"
          >
            Send Email
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
