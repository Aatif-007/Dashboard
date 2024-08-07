import React from "react";

const Customerfeedback = () => {
    const feedback = [
        {
            name : "Jenny Wilson",
            image : "https://randomuser.me/api/portraits/med/men/75.jpg",
            review : "The food was excellent and so was the service. I had the mushroom risotto with scallops which was amazing. I had a burger over greens with gluten free chips which was very green. They were very considerate about gluten allergy."
        },
        {
            name : "Dianne Russell",
            image : "https://randomuser.me/api/portraits/med/women/70.jpg",
            review : "We enjoyed the home made Eggs Benedict foccacia bread and coffee. Perfect service"
        },
        {   
            name : "Devon Lane",
            image : "https://randomuser.me/api/portraits/med/men/70.jpg",
            review : "Normally Wings are wings but with the chicken its really the same."
        },
        {
            name : "Laura Butcher",
            image : "https://randomuser.me/api/portraits/med/women/77.jpg",
            review : "I was so impressed with my breakfast this morning! I tried the Fried Green Tomato Benedict and my boyfriend got the Crab Cakes Benedict. We both finished our whole plates and were so impressed with the quality of the food and the short amount of time it took to receive it. Our waitress was sweet and helpful. I will definitely be back!"
        },
        {
            name : "David Bishop",
            image : "https://randomuser.me/api/portraits/med/men/77.jpg",
            review : "Best breakfast on the east coast! Try the hash!"
        },
        {
            name : "Javed Karem",
            image : "https://randomuser.me/api/portraits/med/men/87.jpg",
            review : "Best breaThe absolute best red sauce. Weather on Pizza or Pasta, it’s honestly delicious. Portions are huge and the staff is extremely friendly and courteous.kfast on the east coast! Try the hash!"
        },
        {
            name : "Bill Medde",
            image : "https://randomuser.me/api/portraits/med/men/80.jpg",
            review : "Very good service, good menu … not overly extensive. Food was very good quality all around. They know how to prepare home fries and their omelets are top-notch. Prices were reasonable"
        }

    ]
    

  return (
    <>
      <div className="customer-section mt-5 bg-gray-700 min-w-[41.5%] font-poppins overflow-y-auto rounded-md hover:bg-gray-600  h-[518px] p-4 md: min-h-full: ">
        <h1 className="customer-section-text py-2 text-white font-semibold text-xl">Customer's Feedback</h1>
        <div className="w-full font-poppins overflow-y-auto">
            <div className="">
            {
                feedback.map((i,index)=> (
                    <div key={index} className="">
                        <div className="flex items-center justify-start gap-4">
                        <img src={i.image}  className="w-12 h-12 rounded-full" />
                        <p className="text-white text-[1.2]">{i.name}</p>
                        </div>
                        <p className="text-xs text-gray-400 tracking-tighter my-2" >{i.review}</p>
                        <hr className="pt-2" />
                        
                        
                    </div>
                    

                ))
            }
        </div>
        </div>
      </div>
    </>
  );
};

export default Customerfeedback;
