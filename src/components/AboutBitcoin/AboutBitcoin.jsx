export default function AboutBitcoin() {
  return (
    <>
      <div className="about-bitcoin-section bg-[#f8fafc] rounded-lg lg:p-6 p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">About Bitcoin</h1>
        <div className="row-1 border-b">
          <h1 className="text-lg font-medium">What is Bitcoin?</h1>
          <p className="py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            aperiam recusandae molestias fugit amet omnis delectus labore
            sapiente hic totam illum sunt culpa accusamus expedita, magnam
            officia? Sed rem consequuntur odit sint distinctio voluptatibus?
          </p>
        </div>
        <div className="row-2 border-b flex flex-col gap-3">
          <h1 className="text-lg font-medium">Lorem ipsum dolor sit.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit earum
            fuga ab eum quis minus quam quas neque animi provident corrupti
            alias reprehenderit incidunt qui repellat, enim tenetur possimus
            eius ullam tempora nobis quos.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit earum
            fuga ab eum quis minus quam quas neque animi provident corrupti
            alias reprehenderit incidunt qui repellat, enim tenetur possimus
            eius ullam tempora nobis quos.
          </p>
          <p className="pb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit earum
            fuga ab eum quis minus quam quas neque animi provident corrupti
            alias reprehenderit incidunt qui repellat, enim tenetur possimus
            eius ullam tempora nobis quos.
          </p>
        </div>
        <div className="row-3 border-b">
          <h1 className="text-2xl font-semibold">Already Holding Bitcoin?</h1>
          <div className="flex lg:flex-row flex-col lg:py-2 py-4 gap-4">
            <div className="card-1 flex bg-blue-100 p-6 rounded-lg gap-6">
              <div className="col-1 lg:w-auto w-1/2">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_k2wsQa2j9sAhjS25DyZxrhAGDJWtNZBYcLVd3uqQ=s900-c-k-c0x00ffffff-no-rj"
                  alt=""
                  className="h-32 w-full rounded-lg"
                />
              </div>
              <div className="col-2 lg:w-auto w-1/2 flex flex-col justify-center gap-4">
                <span>Calculate your Profits</span>
                <button className="p-1 bg-white rounded-lg">Check Now</button>
              </div>
            </div>
            <div className="card-2 flex bg-blue-100 p-6 rounded-lg gap-6">
              <div className="col-1 lg:w-auto w-1/2">
                <img
                  src="https://yt3.googleusercontent.com/ytc/AIdro_k2wsQa2j9sAhjS25DyZxrhAGDJWtNZBYcLVd3uqQ=s900-c-k-c0x00ffffff-no-rj"
                  alt=""
                  className="h-32 w-full rounded-lg"
                />
              </div>
              <div className="col-2 lg:w-auto w-1/2 flex flex-col justify-center gap-4">
                <span>Calculate your tax liability</span>
                <button className="p-1 bg-white rounded-lg">Check Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            minus incidunt corporis eos ea sed, odit pariatur similique corrupti
            ratione autem recusandae laudantium earum dolore rem eaque nemo
            delectus nisi natus consequatur asperiores fuga?
          </p>
        </div>
      </div>
    </>
  );
}
