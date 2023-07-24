import { useContext } from "react";
import { ImSpinner9 } from "react-icons/im";
import { AuthContext } from "../../providers/AuthProvider";

const MyInfo = () => {
  const { user, loading } = useContext(AuthContext);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col max-w-md w-full p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <form
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
           <div>
             <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                disabled
                placeholder={user.displayName}
                className="w-full font-bold px-3 py-2 border rounded-md border-gray-300 bg-gray-200 text-black"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="text" className="block mb-2 text-sm">
                Subject
              </label>
              <input
                type="text"
                name="text"
                id="text"
                required
                placeholder="Enter Your Subject Name"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
                data-temp-mail-org="0"
              />
              <div>
                <label htmlFor="email" className="block mb-2 text-sm">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="Enter Your Email"
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 text-gray-900"
                  data-temp-mail-org="0"
                />
              </div>
            </div>
           </div>
          </div>
          <div>
            <label htmlFor="image" className="block mb-2 text-sm">
              Select Image:
            </label>
            <input
              required
              type="file"
              id="image"
              name="image"
              accept="image/*"
            />
          </div>

          <div>
            <button
              type="submit"
              className="bg-primary w-full rounded-md py-3 text-white"
            >
              {loading ? (
                <ImSpinner9 className="m-auto animate-spin" size={24} />
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyInfo;
