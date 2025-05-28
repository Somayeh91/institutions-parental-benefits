type FAQItem = {
  question: string;
  answer: string;
};
const faqs: FAQItem[] = [
  {
    question:
      "What if my institutions have not provided any information regarding maternity leave?",
    answer: `<p>If your university or institute has not clearly published a maternity or parental‑leave policy for graduate students or postdocs, you still have rights and resources:</p>
    <ol class="list-decimal list-inside mt-4 space-y-4">
  <li>
    <strong>Determine Your Status and Applicable Law</strong><br/>
    - If you are paid as an employee (e.g. postdoc on a W-2), you may qualify for up to 12 weeks of unpaid leave under the federal Family and Medical Leave Act (FMLA), provided your institution has ≥ 50 employees and you’ve worked there ≥ 12 months at ≥ 1,250 hours in the past year.<br />
    - Even if you are a stipend-only graduate student, Title IX prohibits denying you academic access or health-related leave because of pregnancy—and requires “reasonable accommodations” (e.g., modified deadlines, make-up work) once you notify the Title IX coordinator.
  </li>

  <li>
    <strong>Make a Formal Request in Writing</strong><br />
    - Email your PI, department chair/program director, and—if available—the Title IX coordinator or HR office describing your anticipated due or placement date and the accommodations you seek (e.g. course extensions, research-responsibility deferment, stipend continuation).<br />
    - Keep all correspondence by documenting your request.
  </li>

  <li>
    <strong>Escalate and Seek External Remedies</strong><br />
    - If you receive no response or a denial, file a grievance through your institution’s ombuds or Title IX office. Under Title IX, refusal to accommodate pregnancy can be reported to the U.S. Department of Education’s Office for Civil Rights.<br />
    - You can also consult your state’s pregnancy-disability and parental-leave statutes (many states, like California or New York, mandate paid leave beyond FMLA) and, if needed, retain an attorney experienced in employment and education law.
  </li>

  <li>
    <strong>Leverage Campus and Community Resources</strong><br />
    - Even absent a formal policy, your campus may offer short-term disability insurance, emergency loan programs, or childcare subsidies. Ask graduate-student services, your school’s disability office, unions or parent-support groups what informal supports exist.
  </li>
</ol>`,
  },
  {
    question: "Where can I find more information?",
    answer: `<p>Here are some links where you can find more information: </p> 
    <ul>
    <li>
    <a  href="https://nwlc.org/wp-content/uploads/2016/08/FAQStudentRights_nwlc_PPToolkitAug2016.pdf" class="underline" target="-blank">FAQS on Title IX and pregnant and parenting college & graduate student rights</a>
    </li>
    <li><a href="https://thepregnantscholar.org/for-postdocs/parental-leave#:~:text=Postdocs%20working%20on%20any%20NSF,plus%20the%20cost%20of%20benefits" class="underline" target="_blank" >Information on Parental leave supplements provided by federal resarch funders for Postdocs</a> </li>
    <li>
    <a href="https://thepregnantscholar.org/wp-content/uploads/Title-IX-2024-and-2020-Rule-comparison-with-best-practice-summary.pdf" class="underline" target="_blank" >Key changes to Title IX</a>
    </li>
    </ul>`,
  },
  {
    question:
      "Do parental policies apply to international students and postdocs as well?",
    answer:
      "<p>Title IX protects pregnant and parenting students and employees from discrimination based on their sex, including pregnancy and parental status, in educational programs and activities. This law ensures international students are covered by Title IX when they are enrolled in a U.S. educational institution.</p>",
  },
  {
    question:
      "How can I be aware of external fundings for parents in academia?",
    answer: `<p>Some private organizations provide ChildCare grants to accommodate participation of parents in conferences and social events. Make sure to contact your advisor, PI, or department chair to ask about these grants. For example, within the Astrophysics community, the American Astronomical Society (AAS) has a childcare grant for people to participate in their meetings. The Legacy Survey of Space and Time Discovery Alliance (LSST-DA) also provides childcare grants upon availability of funds. </p>`,
  },
  {
    question:
      "Does maternity or parental leave affect my visa status as an international student or postdoc?",
    answer: `<p>Taking maternity or parental leave does not automatically affect your visa status, but you must coordinate carefully. Make sure to consult with your department chair and the international office at your institution.</p> 
    <br/>
    <ul class="list-disc pl-5">
      <li>
      <strong>F-1/J-1 students</strong>: A “leave of absence” or reduced course load must be authorized by your university's International Students Office. Pregnancy and medical conditions can qualify for a reduced course load under SEVIS regulations.
      </li>

      <li>
      <strong>J-1 postdocs </strong>: Short-term medical or parental leave is usually allowed.
      </li>

      <li>
      <strong>H-1B postdocs </strong>: Paid or unpaid medical leave, including parental leave, is generally permitted without affecting status, as long as the employment relationship continues.
      </li>
    </ul>`,
  },
  {
    question: "Will I lose my funding or stipend during parental leave?",
    answer: `
    <p>It depnds how you are funded:</p>
    <br/>
    <ul class="list-disc pl-5">
      <li>
      <strong>Employees (W-2 postdocs, research staff)</strong>: You may be entitled to leave under FMLA or state laws, but whether it is paid depends on your employer’s policy. Most universities offer paid leave for postdocs. 
      </li>

      <li>
      <strong>Stipend-supported students (fellowships, research assistants)</strong>: Funding agencies like NSF, NIH, DOE, NASA often allow paid parental leave (typically 8–12 weeks). Check the rules of your specific grant/fellowship.
      </li>

      <li>
      <strong>University-funded RA/TA positions</strong>: Policies vary. Some universities provide paid parental leave for TAs/RAs; others only guarantee unpaid leave with a promise of continued enrollment.

      </li>
    
    `,
  },
];

function FAQ() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <h3 className="text-2xl text-center mb-4"> Know your Rights.</h3>
      <p className="text-center mb-4">
        It is very important that you know what legal rights you have. In this
        section we have collected legal advice from experts to answer some
        common questions asked by graduate students and postdoctoral researchers
        who are parents or will be parents soon.
      </p>
      <div className="space-y-4">
        {faqs.map((item, idx) => (
          <div key={idx} className="collapse collapse-arrow bg-base-200">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            <div
              className="collapse-content"
              dangerouslySetInnerHTML={{ __html: item.answer }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
