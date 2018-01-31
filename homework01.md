# CSCI 5828 Homework 1      

<hr>

#### 1. Define the term essential difficulties as it is used by Brooks. Provide background and context with your answer and at least one example of an essential difficulty.

<hr>

Essential difficulties of the software is the inherent difficulties that software has because it is software. The software has its own essential difficulties that are different from anything else made by man, and can not be completely eliminated because they are literally essential. Significant mitigation is also difficult, which limits the improvement in productivity of software development. Therefore, since they are nature of software problems, it is a issue that must go together with software engineers during software development.. For example, if the customer requires the 10 features of the software, the complexity involved in developing those 10 features comes from the requirements. Therefore the complexity can not be mitigated or eliminated. Although similar functions have been developed previously, we need to develop new features to fit the new software. In addition, although all 10 features have been developed, the customer may ask for modifications. These can be called the inevitable software essential difficulties. 

![Essential-Difficulties](/pics/Essential-Difficulties.jpg)

<hr>

#### 2. Define the term accidental difficulties as it is used by Brooks. Provide background and context with your answer and at least one example of an accidental difficulty.

<hr>

Accidental difficulties of software are not inherent as the essential difficulties. They can be solved in software production. That is, since there are some solutions available, many solutions that have been proposed to increase the productivity of the software tend to focus on accidental difficulties than effential difficulties. Accidental difficulties have more selective characteristics than essential difficulties. For example, when you are creating programs in Assembly language, you can lower the complexity by using C or Python. Alternatively, IDE, such as Eclipse, can be used if the software development on Notepad has the difficulty. As such, the difficulties from choice can be mitigated. However, the problem can not be completely eliminated because the method used as the solution (e.g., C language, eclipse) also introduces new problems.

<hr>

#### 3. List and briefly describe the four essential difficulties of developing software systems that Brooks identifies. Provide additional examples of each type of the four essential difficulties.

<hr>

- **Complexity**: The software is inherently very complicated. Because the software has a huge number of states, it is very difficult to properly specify, design, and test it. In addition, the software can not perform such tasks as repeating the use of a particular part when building. Since neither part of the software is the same, all functions must be developed afresh. Therefore, it is difficult to scaling-up because it is difficult to identify(and also specify) all of the changes of the states and to develop a new function.(Therefore, the scailing-up have the same complexity as developing new software) For example, in my company, I am working on adding new features to existing avionics software. Because avionics software is very complex, even the simplest function takes a long time to figure out its impact. And when I start development, it is called 'source code modification', but it is actually 'software development' for that function.

- **Conformity**: Conformity is a very important when developing software. The software must be developed to meet a variety of limitations, including legacy hardware, laws, and business rules. Because software development can not wish for a ‘only one thing’ such as the unified field theory studied in physics, all rules should be considered, making it more complex and difficult to develop software. For example, in the case of Avionics software, due to the high number of rules, it is necessary to ensure that the software is using frequencies within acceptable, meets the airworthiness standards, and satisfies the security criteria. It was very important to consider conformity where I used to work, as there was a case in which all software development was finished and the software was delivered much later than we expected because we violated the airworthiness standards.

- **Changeability**: It is very easy to understand that remodeling a building is very expensive and difficult, whereas the software is considered relatively easy. As a result, the software is constantly being asked to change. Especially, successful softwares receive more change requests than less frequently used software since there are more users who require more functions than originally developed. In addition, the software that is used for many years must be constantly changed to make it compatible with the machine as the hardware develops. In some cases, software need to be changed due to other software. In the case of Hancom Office(Korean version of MSoffice), ‘HanWord’, ‘HanCell’, and ‘HanShow’ are made to correspond to MSOffice Word, Excel and PowerPoint respectively. Users can work with files such as .doc, .xlsx, .pptx when they use the Hancom office. Because of this, whenever a new version of Microsoft Office is released, Hancom Office is developed that is compatible with it.

- **Invisibility**: The software is essentially unable to visualize. Even if you try to visualize it, it is difficult to use because the result is very complicated. This feature of the software makes it impossible to create something like the floor plan to show the customer when building the building.. It is difficult for customers to understand what the developer's software look like, and developers can not think about their work as an architect. Some of the difficulties that arise from this feature of software are causing very difficult results. For example, if you think you have developed software with a lot of discussions with your customers, you might need to redevelop the software in the worst case if customers don’t like that. Even if they talked enough, it is because they did not look at the software.

<hr>

#### 4. Define what Brooks means by a silver bullet and reconstruct his argument as to why he believes there is no silver bullet for software engineering.

<hr>

From an economic point of view, it is very important to improve productivity when building something, whether it is software or hardware. In fact, there have been many significant improvements in productivity in building a building and making cars. However, Brooks says it is hard to expect such " significant " improvements in software productivity. No technology or management method can guarantee a huge improvement in productivity by itself. He introduces the various problems that the software has for that reason. He explains that the software has essential difficulties and accidental difficulties and says that the essential difficulties are hard to solve. Most new technologies can only solve accidental difficulties and can not mitigate or eliminate essential difficulties. So there is no silver bullet to dramatically reduce the cost of software development and dramatically increase productivity. 

<hr>

#### 5. In lecture, software engineering's relationship to computer science was described by analogy by discussing the differences between a chemist (chemistry) and a chemical engineer (chemical engineering). Define software engineering and its relationship to computer science; make use of the chemist vs. chemical engineer analogy when answering this question.

<hr>

Chemists develop new technologies and make theories. It is the role of chemists to think of ways to desalinate sea water to solve the problem of drinking water. They try to solve these problems, but there is no guarantee that the method they made is very simple, low cost, or widely applicable. That is up to chemical engineers. They think of ways to make chemistry's theories applicable to real life. They try to find ways to massive desalination and use minimal costs. The same contrast applies to the relationship between computer science and software engineering. Computer scientists develop new algorithms or create new techniques. This may be a good way to dramatically reduce the compute time compared to traditional methods. But it may require expensive hardware or the application method may be complicated to use in real software. Software engineers are trying to figure out how to apply something that computer scientists have developed to actual software. They do not just apply it. They worry about practicality and cost. 
 That is, while computer scientists and chemists study a more theoretical part and think about the 'problem solving', engineers try to find ways to "apply" the theory and problem-solving methods scientists have designed to their real lives.
 
>Science is about knowing, engineering is about doing.
>	-Henry Petroski

![science](/pics/science-versus-engineering-versus-liberal-arts.jpg)

<hr>

#### 6. In lecture, we discussed the importance of the following concepts to software engineers: abstractions, conversations, specification, translation, and iteration. Define each of these concepts as they are related to software engineering and discuss their importance.

<hr>

- **Abstraction**: Abstraction is very common in software. Abstraction is simply a simplification. In other words, it represents a very complex concept with only a core concept. Because software is inherently complex, it is necessary to divide big problems into small problems in order to develop large systems. Abstraction is used in this case. The people in charge of each sub-problem do not need to understand the problem more than the one they are responsible for. This allows for more efficient development because all software developers do not have to understand all the features. Abstraction is also important for the customer. The customer does not need to know what happens in the software if they know just what input and output the function has to use. from developer to customer, abstraction allows everyone to know only the minimum amount of information they need.

- **Specification**: Brooks says a specification for complex software as one of the hardest difficulty in developing software in his article. Software engineers must specify everything, including requirements, design plans, and test plans. Specification is a very cumbersome task, but very important. If the specification is not good, it is difficult for all team members of the project to share the customer's requirements. If they do not specify all the functions, they may be missing at the development stage or may have the possibility of flaw. Also, since the specifi cations are the basis of the test in the test phase, the test can not be performed without specification. Therefore, the specification is not only for the purpose of recording for future reference, but is a very important task that penetrates the software project as a whole.

- **Translation**: Software development projects include bunch of people. Designers, developers, and testers as well as people in charge of marketing or budget work together. Therefore, software development project come and go between different people. The testers take the software developed by the developers and carry out the tests, developers develop their own function and then move on to the next level. Smooth translation is essential for software development projects.

- **Iteration**: In software development, iteration can be seen at every stage. Developers constantly perform development-testing (at the developer level) while developing. By doing so, the reliability of the software can be increased. In addition, the agile model is designed to check frequently developed software by the customer, so that customer satisfaction can be improved by repeating the development-confirmation. Therefore, it is imperative that a wide variety of iterations take place within all phases of the software project. No matter how clear the specification is, project development without iteration can not exist.

- **Conversation**: Conversation is important not only in software development projects but in all areas, but communication between people who involve software development is critical. Not only developers and testers, but also customers, graphic designers, project managers need conversation. By communicating with customers, customers can specify their requirements and developers can prevent unnecessary work. Communication with the project manager ensures that the development progress and problems are checked from time to time. In a big project, communication is very important because it helps them to understand all the considerations surrounding their job and helps decision makers make decisions.

<hr>

For better essay in English, I would like to take the ESLG1210 Academic Writing for Foreign Students class this semester. But the class was canceled since I’m the only student who enrolled the class. I will study by myself and try to write better essay.
