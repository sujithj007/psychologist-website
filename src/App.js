import logo from "./logo.png";
import image from "./image1.jpg";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import "./App.css";

function App() {
  return (
    <div>
      <div className="header">
        <img src={logo} className="logo" alt=""/>
      </div>
      <div className="app-body">
        <div className="about-banner">
          <h2>About Psychologists</h2>
          <div className="content">
            <div className="text-cont">
              <pr>
                Psychologists can be seen as practicing within two general
                categories of psychology: applied psychology which includes
                "practitioners" or "professionals", and research-orientated
                psychology which includes "scientists", or "scholars". The
                training models endorsed by the American Psychological
                Association (APA) require that applied psychologists be trained
                as both researchers and practitioners, and that they possess
                advanced degrees.
                <br />
                <br />
                Psychologists typically have one of two degrees: PsyD or PhD.
                The PsyD program prepares the student only for clinical practice
                (e.g., testing, psychotherapy). Depending on the specialty
                (industrial/organizational, social, clinical, school, etc.), a
                PhD may be trained in clinical practice as well as in scientific
                methodology, to prepare for a career in academia or research.
                Both the PsyD and PhD programs prepare students to take state
                licensing exams.
                <br />
                <br />
                Within the two main categories are many further types of
                psychologists as reflected by the 56 professional
                classifications recognized by the APA, including clinical,
                counseling, and school psychologists. Such professionals work
                with persons in a variety of therapeutic contexts. People often
                think of the discipline as involving only such clinical or
                counseling psychologists. While counseling and psychotherapy are
                common activities for psychologists, these applied fields are
                just two branches in the larger domain of psychology. There are
                other classifications such as industrial, organizational and
                community psychologists, whose professionals mainly apply
                psychological research, theories, and techniques to "real-world"
                problems of business, industry, social benefit organizations,
                government, and academia.
              </pr>
            </div>
            <div className="img-cont">
              <img src={image} className="image-1" alt=""/>
            </div>
          </div>
        </div>
        <div className="types-cont">
          <h3 className="types-heading">Types of Psychologist :</h3>
          <h5> 1. Aviation Psychologists</h5>
          <div>
            <pr>
              These psychologists study the behavior of pilots and other flight
              crew members. Aviation psychologists also perform research on
              airline safety, develop new training equipment, and help select
              suitable employees.
              <br />
              <br />
              For example, an aviation psychologist might select or even develop
              psychological tests used to screen applicants for elite pilot
              positions. Because of the highly specialized and delicate nature
              of the job, it is essential to choose candidates who are healthy,
              stable, and capable of coping with intense pressure. Aviation
              psychologists utilize their knowledge of psychology to ensure that
              only the best people are chosen for these critical roles.
              <br />
              <br />
              Aviation psychologists might also work with other professionals,
              including engineers and human factors psychologists, to design
              different components of airplanes such as the cabins or flight
              decks. By taking human psychology into consideration during the
              design process, aviation psychologists can help ensure that these
              products are developed with perception, attention, memory, and
              other capabilities in mind.
            </pr>
          </div>
          <h5>2. Biopsychologists</h5>
          <div>
            <pr>
              These psychologists are also sometimes called biological
              psychologists or physiological psychologists. They study and
              perform research on the brain and behavior. By examining the
              neural bases of behavior, biopsychologists are able to understand
              different biological factors that might impact how people think,
              feel, and act.
              <br />
              <br />
              This type of psychologist might also investigate how brain disease
              and injury impact behavior. By better understanding how people are
              affected by such injuries and diseases, researchers can also find
              new ways of preventing, treating, and managing serious brain
              illnesses and trauma.
            </pr>
          </div>
          <h5> 3. Clinical Psychologists</h5>
          <div>
            <pr>
              Clinical psychologists often work in hospitals, mental health
              clinics, and private practice. They are trained in a variety of
              treatment techniques but may specialize in treating certain
              disorders or working with certain populations. For example, a
              clinical psychologist might specialize in an area such as
              substance abuse treatment, child mental health, adult mental
              health, or geriatric mental health.
              <br />
              <br />
              While clinical psychologists often work in medical settings, they
              are not physicians and in most cases cannot prescribe medications.
            </pr>
          </div>
          <div className="random-image-cont-1">
            <img src={image2} alt="" className="random-image"></img>
          </div>
          <h5> 4. Cognitive Psychologists</h5>
          <div>
            <pr>
              Cognitive psychologists investigate how people think, including
              topics such as decision-making and problem-solving. This type of
              psychologist is interested in how the brain processes, learns,
              stores, recognizes, and utilizes information.
              <br />
              <br />
              Cognitive psychologists may work in a variety of settings,
              including universities, research centers, rehabilitation
              facilities, hospitals, government agencies, and in private
              practice. Professionals in this field often perform a range of
              duties such as conducting research and working with patients. As
              with other areas of psychology, cognitive psychologists often
              choose to specialize in a particular area such as memory, language
              development, attention, problem-solving, or learning disabilities.
            </pr>
          </div>
          <h5> 5.Community Psychologists</h5>
          <div>
            <pr>
              This type of psychologist conducts research on community health
              issues. They also seek to educate the community and develop
              prevention programs. These professionals are focused on helping
              lead positive changes at both the individual and community levels.
              <br />
              <br />
              You may find community psychologists working in a range of
              settings at universities, government agencies, community
              organizations, and private businesses as professors, consultants,
              policy advisors, program directors, and researchers. Research in
              this area tends to be very action-oriented and focuses on
              developing real-world solutions that can immediately be put into
              practice. Community psychologists work to address social problems,
              promote health and wellness, and enact policies that improve
              people's lives.
            </pr>
          </div>
          <h5>6. Comparative Psychologists</h5>
          <div>
            <pr>
              Comparative psychologists study the behavior of different species,
              particularly how animal and human behavior differs. Why study
              animals? Because while there are obviously major differences, it
              is assumed that some things may hold true for all species.
              <br />
              <br />
              Therefore studying the behaviors and responses of animals such as
              rats and dogs can provide insights into human behaviors as well.
              Such observations have proven important throughout much of
              psychology's history.
              <br />
              <br />
              Thorndike's work with cats, Pavlov's work with dogs, and Skinner's
              work with pigeons are just some of the examples of comparative
              psychology in which animal behavior can provide insights into
              human behavior.
            </pr>
          </div>
          <h5> 7. Consumer Psychologists</h5>
          <div>
            <pr>
              Also known as marketing psychologists, consumer psychologists
              research consumer behavior and develop marketing strategies to
              promote businesses. This type of psychologist is involved in
              helping businesses better understand what makes consumers purchase
              products and services. They research how buyers respond to
              marketing messages, analyze decision-making strategies, and
              investigate the role that emotions play in purchasing choices.
              <br />
              <br />
              These professionals help businesses develop marketing messages,
              identify target audiences, develop products that appeal to
              specific consumers, and learn about how attitudes toward brands
              and products form and change. They accomplish these tasks through
              the use of market research surveys, experiments, naturalistic
              observations, and consumer focus groups.
            </pr>
          </div>
          <h5> 8 . Counseling Psychologists</h5>
          <div>
            <pr>
              Counseling psychologists provide psychotherapy to people
              experiencing psychological disturbances, behavioral problems,
              emotional difficulties, stress, and related issues. These
              professionals share many commonalities with clinical
              psychologists.
              <br />
              <br />
              Counseling psychologists make an average of $85,000 per year. As
              with clinical psychologists, they provide psychotherapy and can
              legally identify themselves as licensed psychologists
            </pr>
          </div>
          <div className="random-image-cont">
            <img src={image3} alt="" className="random-image"></img>
          </div>
          <h5> 9 . Cross-Cultural Psychologists</h5>
          <div>
            <pr>
              Cross-cultural psychologists look at how people vary across
              cultures and how cultural affiliations influence behavior. They
              often explore how different aspects of behavior may be either
              universal or varied across different cultures.
              <br />
              <br />
              For example, cross-cultural psychologists might investigate how
              parenting styles differ between collectivist cultures versus
              individualist cultures as well as how these differences in
              upbringing influence adult behavior.
            </pr>
          </div>
          <h5> 10 . Developmental Psychologists</h5>
          <div>
            <pr>
              Developmental psychologists research human development across the
              entire lifespan. Some focus on a specific period such as early
              childhood, adolescence, adulthood, or old age. These professionals
              may perform tasks such as evaluating children who may have a
              developmental delay or disability, investigating issues associated
              with aging, and studying how language skills are acquired.
              <br />
              <br />
              Some developmental psychologists may focus on research and add to
              our understanding of developmental issues that can arise
              throughout life. Other professionals may perform applied work with
              clients who need assistance in coping with developmental issues
            </pr>
          </div>
          <h5> 11 . Educational Psychologists</h5>
          <div>
            <pr>
              These psychologists study how people learn and the educational
              process. This might involve developing instructional strategies
              and teaching techniques. Some educational psychologists study
              giftedness or learning disabilities.
              <br />
              <br />
              This type of psychologist looks at how social, cognitive, and
              emotional factors impact the learning process. Some professionals
              in this field specialize in identifying and dealing with potential
              problems that might interfere with how children learn. Others
              specialize in researching the learning process, while some might
              instead focus on designing instructional materials that maximize
              learning outcomes. Educational psychologists make an average of
              $75,000 per year, slightly less than the average ($79,010) for all
              psychology professions, according to the U.S. Bureau of Labor
              Statistics.1 ﻿
            </pr>
          </div>
          <div className="random-image-cont-1">
            <img src={image4} alt="" className="random-image"></img>
          </div>
          <h5>12 .Engineering Psychologists</h5>
          <div>
            <pr>
              Engineering psychologists are focused on discovering ways to
              enhance human abilities by improving machines, equipment,
              technology, and work environments. While some may focus on more
              basic research, this is most often a very applied field.
              Engineering psychologists work to solve real-world problems and
              develop solutions that can have practical applications in everyday
              life.
              <br />
              <br />
              Engineering psychologists may be tasked with developing technology
              that can be used in the healthcare industry to help patients
              recover faster. They also help design and refine products that
              people use each and every day, including mobile phones and motor
              vehicles.
            </pr>
          </div>
          <h5> 13 . Environmental Psychologists</h5>
          <div>
            <pr>
              Environmental psychologists explore the relationship between
              people and their surroundings, including natural environments as
              well as created environments. This might involve working on
              conservation projects, helping to protect endangered species, and
              investigating ways to halt global warming.
              <br />
              <br />
              These professionals may work as researchers to study the impact
              that humans have on their environments. Some environmental
              psychologists also work in government to shape environmental
              policies.
            </pr>
          </div>
          <h5> 14 . Forensic Psychologists</h5>
          <div>
            <pr>
              Forensic psychologists focus on the relationship between
              psychology and the law. This might involve acting as a consultant
              in criminal cases or civil disputes, performing child custody
              evaluations, and offering psychotherapy services to crime victims.
              <br />
              <br />
              Thanks to popular depictions in movies and television programs,
              interest in this field has grown tremendously in recent years.
              While these pop culture depictions often portray the forensic
              psychologist as a sleuth working to catch criminals, real forensic
              psychologists typically perform duties such as assessing juvenile
              and adult offenders for risk of recidivism, working with child
              witnesses, evaluating competency to stand trial, and offering
              professional testimony in court.
            </pr>
          </div>
          <h5> 15 . Health Psychologists</h5>
          <div>
            <pr>
              Health psychologists are centered on how psychology, biology,
              social groups, and behavior influence wellness, illness, and
              overall health. They work with clients to help maximize well-being
              and improve both mental and physical health.
              <br />
              <br />
              Some professionals in this field perform clinical work where they
              assess and treat clients who are seeking assistance with a variety
              of health issues. This might involve providing psychotherapy,
              administering different psychological assessments, teaching people
              about different coping techniques, and educating clients about
              healthy behaviors.
            </pr>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
