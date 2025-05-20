type GlossaryItem = {
  term: string;
  definition: string;
};

const glossaryItems: GlossaryItem[] = [
  {
    term: "Federal Family and Medical Leave Act (FMLA)",
    definition:
      "A law that entitles eligible employees to take unpaid, job-protected leave for specific family and medical reasons. This includes leave for the birth and care of a newborn, adoption or foster care placement, caring for a family member with a serious health condition, or when an employee is unable to work due to their own serious health condition.",
  },
  {
    term: "Title IX",
    definition:
      "Title IX is a federal civil rights law passed in 1972 that prohibits sex-based discrimination in education programs and activities receiving federal financial assistance. It ensures equal opportunities for all students, regardless of sex, in areas like athletics, academic programs, and student life. Title IX protects pregnant and parenting students and employees from discrimination based on their sex, including pregnancy and parental status, in educational programs and activities. This means schools cannot discriminate against students based on their pregnancy, childbirth, or related conditions, or treat them differently based on gender stereotypes about parenting. This means that international students are covered by Title IX when they are enrolled in a U.S. educational institution.",
  },
  {
    term: "Title IX Coordinator",
    definition:
      "A Title IX Coordinator is a designated person at an educational institution responsible for ensuring compliance with Title IX, which prohibits sex discrimination in education. They serve as a resource for students, faculty, and staff regarding sex-based discrimination and sexual misconduct. Title IX Coordinators also handle reports, complaints, and the overall implementation of Title IX policies.",
  },
  {
    term: "Graduate Student Employee Unionization",
    definition:
      "Graduate student unions are beneficial because they provide a collective voice for students to advocate for better working conditions, compensation, and benefits. They offer bargaining power, allowing students to negotiate for things like stipends, health insurance, and other benefits.Furthermore, unions can create a sense of community among graduate students and provide a platform for social interaction. ",
  },
];

function Glossary() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-center font-bold text-3xl mb-4">Glossary</h2>
      <p className="text-center mb-4">
        This glossary provides definitions of key terms related to parental
        policies and support for graduate students and postdocs.
      </p>
      <div className="space-y-4">
        {glossaryItems.map((currentElement, currentIndex) => (
          <div
            key={currentIndex}
            className="collapse collapse-arrow bg-base-200"
          >
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              {currentElement.term}
            </div>
            <div className="collapse-content">
              <p>{currentElement.definition}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Glossary;
