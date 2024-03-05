export default function Tokenomics() {
  return (
    <>
      <div className="tokenomics-section bg-[#f8fafc] rounded-lg lg:p-6 p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Tokenomics</h1>
        <span className="text-lg font-semibold">Initial Distribution</span>
        <div className="graph lg:flex items-center gap-8">
          <div className="col-1 lg:h-36 lg:w-36 lg:mb-0 mb-4 h-36 w-36 bg-[#67e8f9] rounded-full"></div>
          <div className="col-2 flex flex-col gap-2">
            <div className="first flex items-center gap-2">
              <img
                src="https://www.getnoticedbranding.co.uk/uploads/3/6/4/1/3641668/img-logo_orig.jpg"
                alt=""
                className="h-4 w-4 rounded-full"
              />
              <span>Crowdsale Investors: 80%</span>
            </div>
            <div className="second flex items-center gap-2">
              <img
                src="https://www.getnoticedbranding.co.uk/uploads/3/6/4/1/3641668/img-logo_orig.jpg"
                alt=""
                className="h-4 w-4 rounded-full"
              />
              <span>Foundation: 20%</span>
            </div>
          </div>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet,
          sed. Quia, corrupti reiciendis voluptate eos dolor ducimus dolorem
          officiis architecto ex a placeat, laborum, porro id. Numquam illum
          tempora nihil, odio similique maxime qui veritatis odit deleniti,
          consectetur laudantium eum accusamus ipsum. Nesciunt magnam cupiditate
          iusto. Id pariatur rem quidem sed aut, mollitia accusantium dolorem
          totam officiis qui nisi rerum obcaecati voluptatum laudantium
          praesentium eligendi adipisci nulla suscipit quam a, ullam cum.
          Quibusdam deleniti minima odit maiores rem temporibus voluptates.
        </p>
      </div>{" "}
    </>
  );
}
