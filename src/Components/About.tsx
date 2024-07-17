function About() {
  return (
    <div className="pt-28">
      <div className="bg-about h-[calc(100vh-10rem)] bg-center bg-no-repeat bg-cover flex items-center justify-start px-32 mx-10">
        <p className="text-6xl font-bold text-white">We are D A D</p>
      </div>
      <section className="pt-5">
        <div className="bg-since bg-left bg-contain bg-no-repeat h-[50vh] mx-10"></div>
        <div className="bg-yellow-500 p-10 text-white h-[50vh]">
          When the Propage agency was founded in the fall of 1988, the word
          “Internet” meant nothing. A “click” was nothing more than a sound.
          Cell phones were rarely “smart.” Looking back in history, it was in
          the fall of 1988 that Steve Jobs launched the first NeXT computer. We
          were still a long way from the concept of “1000 songs in your pocket,”
          which would become a strong icon of the ensuing digital revolution. In
          1988, graphic design took its first steps into the digital age. An
          online sale meant that the customer was on the other end of the phone.
          Social media as we know it wasn't even an idea. And it was still
          customary to submit information by fax.
        </div>
      </section>
      <section className="flex items-center justify-center h-screen text-center text-5xl">
        <p className="w-1/2 shrikhand-regular font-extralight">
          The future of marketing and communication is more digital than ever,
          but also more focused on people. Your customer experience must be at
          the centre of everything.
        </p>
      </section>
      <section className="h-[calc(100vh-5rem)] p-9 relative ">
        <div className="bg-black flex items-end justify-center h-full bg-curves bg-no-repeat bg-right">
          <img
            src="https://propage.com/imports/images/b2b-en.png"
            className="absolute left-0 top-12"
            alt=""
          />
          <div className="content w-3/4 text-white mb-28 text-justify font-extralight">
            It’s a fact that very few of the agencies founded back in 1988 have
            survived the many upheavals that have brought us to the digital age.
            But Propage did. We did this while remaining current, inspired and
            connected to new technologies. We did this by constantly developing
            our design expertise, but also because of our keen business sense.
            And while many have only momentarily “surfed” on one of the many
            technological waves, we have guided our clients throughout the
            journey without ever changing course: helping B2B companies to sell
            more and to sell better. We have amassed three decades of expertise
            in our collective memory for the benefit of our customers and their
            growth. Our history has been marked by relevance. And our history
            makes us who we are.
          </div>
        </div>
      </section>
      <section className="bg-zinc-600 h-screen flex items-center justify-center bg-complience-1 bg-no-repeat bg-left-bottom">
        <div className="w-1/2 text-5xl shrikhand-regular text-center text-white">
          The only way to get results in marketing is by tightening the bonds of
          cooperation between all things.
        </div>
      </section>
      <section className="bg-black h-screen bg-complience-2 bg-no-repeat bg-left-top relative">
        <div className="flex items-end justify-end h-full bg-curves bg-no-repeat bg-right">
          <img
            src="https://propage.com/imports/images/confidence.png"
            className="absolute left-16 top-32 w-3/4"
            alt=""
          />
          <div className="content w-1/2 text-white mb-36 mr-36 text-justify font-extralight">
            Propage wasn’t born yesterday, and for our customers, this is an
            asset. We owe our cooperative, sincere approach to our
            organization’s maturity and the wisdom acquired. We believe that
            humility is greater than arrogance. That the US has more value than
            any I. And if the world is full of people who need to shout to
            assert themselves, we’re clearly not one of them. Because in our
            mind and always, it’s the client’s need that takes precedence, not
            ours. This is why we never approach a project with the intention of
            “selling” ideas, but rather with that of generating results. Rather
            than creating without thinking about tomorrow, we prefer to build
            the future with our customers. Our history is marked by loyalty. And
            our story makes us who we are.
          </div>
        </div>
      </section>
      <section className="bg-yellow-500 h-screen flex items-center justify-center">
        <div className="text-center text-5xl w-1/2 text-white">
          Regardless of their role, every client wants results and increased
          growth for their business.
        </div>
      </section>
      <section className="bg-methode bg-contain bg-no-repeat bg-left p-10 h-screen relative">
        <div className="absolute left-1/4 top-1/4 w-3/4">
          <img
            src="https://propage.com/imports/images/systematic.gif"
            alt="GIF"
            className="w-full"
          />
        </div>
        <div className="flex items-end justify-center h-full">
          <p className="w-1/2 mb-20 ml-40">
            No communication strategy exists today without a website. Digital
            tools related to websites are more powerful and accurate than ever,
            but certainly less than they will be tomorrow. For companies, the
            challenge of keeping up to date is therefore both immense and
            essential to their growth. We remain by your side so that you
            accomplish this with convincing results. We are constantly pushing
            our ability to convert the information collected into leads and then
            into actual sales. Our method is structured and systemic, without
            ever losing sight of your objectives and your business model.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
