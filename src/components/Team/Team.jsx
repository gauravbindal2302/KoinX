import React from "react";

const team = [
  {
    name: "John Smith",
    profilePic:
      "https://yt3.googleusercontent.com/ytc/AIdro_k2wsQa2j9sAhjS25DyZxrhAGDJWtNZBYcLVd3uqQ=s900-c-k-c0x00ffffff-no-rj",
    designation: "Frontend Engineer",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Jane Doe",
    profilePic:
      "https://yt3.googleusercontent.com/ytc/AIdro_k2wsQa2j9sAhjS25DyZxrhAGDJWtNZBYcLVd3uqQ=s900-c-k-c0x00ffffff-no-rj",
    designation: "Backend Developer",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Alice Johnson",
    profilePic:
      "https://yt3.googleusercontent.com/ytc/AIdro_k2wsQa2j9sAhjS25DyZxrhAGDJWtNZBYcLVd3uqQ=s900-c-k-c0x00ffffff-no-rj",
    designation: "UI/UX Designer",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Bob Brown",
    profilePic:
      "https://yt3.googleusercontent.com/ytc/AIdro_k2wsQa2j9sAhjS25DyZxrhAGDJWtNZBYcLVd3uqQ=s900-c-k-c0x00ffffff-no-rj",
    designation: "Software Engineer",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
  {
    name: "Ella Garcia",
    profilePic:
      "https://yt3.googleusercontent.com/ytc/AIdro_k2wsQa2j9sAhjS25DyZxrhAGDJWtNZBYcLVd3uqQ=s900-c-k-c0x00ffffff-no-rj",
    designation: "Product Manager",
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit",
  },
];

export default function Team() {
  return (
    <>
      <div className="team-section bg-[#f8fafc] rounded-lg lg:p-6 flex flex-col gap-4">
        <h1 className="text-2xl font-semibold">Team</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          placeat sed omnis quis amet recusandae aliquam beatae accusamus ex
          maxime.
        </p>
        <div className="teams flex flex-col gap-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="team flex rounded-lg bg-[#e0f2fe] lg:p-4 gap-4"
            >
              <div className="col-1 w-1/6 flex flex-col justify-center items-center gap-1">
                <img
                  src={member.profilePic}
                  alt={member.name}
                  className="h-28 w-24 rounded-lg"
                />
                <span>{member.name}</span>
                <p>{member.designation}</p>
              </div>
              <div className="col-2 w-5/6 flex justify-center items-center">
                <p>{member.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>{" "}
    </>
  );
}
