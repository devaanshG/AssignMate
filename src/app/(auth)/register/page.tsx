export default function Register() {
  return (
    <>
      <section className="flex items-center justify-center overflow-hidden">
        <div className="w-[50vw] h-screen flex items-center justify-center">
          <form action="" className="flex flex-col w-1/2 bg-white-200">
            <div className="flex mb-5">
              <div>
                <label htmlFor="fname">First name</label>
                <input type="text" name="fname" id="fname" className="w-1/2" />
              </div>
              <div>
                <label htmlFor="lname">Last name</label>
                <input type="text" name="lname" id="lname" className="w-1/2" />
              </div>
            </div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="dob">Date of birth</label>
            <input type="date" name="dob" id="dob" />
          </form>
        </div>
        <div className="bg-ecstasy-200 w-[50vw] h-screen"></div>
      </section>
    </>
  );
}
