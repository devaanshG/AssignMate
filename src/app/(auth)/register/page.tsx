export default function Register() {
  return (
    <>
      <section className="flex items-center justify-center overflow-hidden">
        <div className="w-[50vw] h-screen flex items-center justify-center">
          <form
            action=""
            className="flex flex-col w-[70%] shadow-lg rounded-xl p-10 gap-5"
          >
            <div className="flex justify-between">
              <div className="flex flex-col">
                <label htmlFor="fname">First name</label>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  className="h-9 rounded-md border-b-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lname">Last name</label>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  className="h-9 rounded-md border-b-2"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="h-9 rounded-md border-b-2"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="dob">Date of birth</label>
              <input
                type="date"
                name="dob"
                id="dob"
                className="h-9 rounded-md border-b-2"
              />
            </div>
          </form>
        </div>
        <div className="bg-ecstasy-300 w-[50vw] h-screen flex items-center justify-center">
          <h1 className="text-7xl text-center">Join the Future of Grading</h1>
        </div>
      </section>
    </>
  );
}
