const LanguageRegion = () => (

  <> <div className="py-4 bg-white shadow-xl rounded-[20px] ">
  <div className="flex justify-between items-center pb-3">
    <div>
      <h2 className="text-xl font-semibold pl-4">Language Preference</h2>
      </div>
      
    </div>
    <hr className='border-b '></hr>
    {/* Use ToggleBar component */}
    <div>
      
      <div className="bg-white p-4 rounded-lg ">
        <label className="block mb-2">Select the language for the platform's interface:</label>
        <select className="w-full border h-[45px] border-gray-300 rounded-md p-2">
          <option>English (Selected)</option>
          <option>Marathi</option>
          <option>Hindi</option>
        </select>
        <p className="mt-2 text-sm "><span className="font-semibold">Note:</span> Indian languages coming soon</p>
      </div>
    </div>
  </div>
    
    </>
  );
  export default LanguageRegion