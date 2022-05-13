const fs = require('fs')
//courses
var law = ['Legal systems and method', 'Criminal Law', 'Race, media and crime'
    , 'Law of torts', 'EU Law', 'Contract Law', 'Introduction to jurisprudence'
    , 'Medical Law and ethics', 'Criminal justice', 'Tax law', 'Constitutional Law'
    , 'Intellectual Property Law', 'Civil Law', 'Cyber Law', 'Labour and Employment Law'
    , 'Banking Law', 'Family Law', 'Law of Crime', 'Law of Evidence', 'Jurisprudence'
    , 'Land Laws', 'Drafting, Pleading and Conveyancing', 'Women and Law', 'International Refugee Law', 'Human Rights'
    , 'Intellectual Property Rights', 'Legal Ethics and Court Crafts', 'Land and Real Estate Laws'
    , 'History', 'Advocacy skills', 'Code of Civil Procedure I', 'International Trade Law'
    , 'Legal Ethics and Court Craft', 'Computer Lab', 'Legal Method', 'Legal English and Communication Skills'
    , 'Principles of Management', 'Law of Torts and Consumer Protection', 'Organisational behavior'
    , 'Strategic Management', 'Corporate Law', 'International Law', 'Drafting, Pleading and Conveyancing'
    , 'Business Statistics', 'Law of Contract I', 'Woman, Child and the Law', 'English II', 'Environmental Studies'
    , 'North American law', 'Law in Latin'
];

var medics = ['Preventive and clinical nutrition'
    , 'Sports nutrition', 'Basic Mathematics for Health Economists', 'Fundamentals of Health Economics'
    , 'Demand for health and health insurance', 'Paying Providers of Health Care', 'Optimal regulation'
    ,'Cost and efficiency analyses of health care providers', 'Need analyses, risk adjustments and formula funding'
    ,'Health Literacy', 'Introduction to Qualitative Methods', 'Medical and Health Related Research Ethics'
    ,'Introduction to medical anthropology', 'Medical history: sources, methods and historiographic questions'
    ,'Register-based epidemiology', 'Reproductive and sexual health and rights in global health'
    ,'Fundamentals of economic evaluation in health care', 'Valuing Health'
    ,'Modeling in economic evaluation I', 'Modeling in economic evaluation II'
    ,'Topics in Health Policy', 'Fundamentals of Health Law', 'Fundamentals of management'
    ,'Leadership, Management and Organization Development', 'Health organization development and design'
    ,'Internship', 'Topics in Priority Setting', 'Management in practice (HR-management)', 'Integrated Care Models'
    ,'Policy analysis and evaluation', 'Topics in Health Management','Non-parametric methods', 'Master thesis', 'Quantitative biology, or mathematics is biology’s next microscope'
    ,'Prediction (in Molecular Biology)', 'Modern methods for analyzing survival and time to event data'
    ,'Epidemiology in Practice - Methodology, examples and tools', 'Global Epidemics'
    ,'Water and Food in a Global Health Perspective', 'Migration and Health'
    , 'Statistical Principles in Genomics: an Introduction with Rstudio'
    ,'Translational cardiology: From bench to bedside', 'Module 6, Medicine'
    , 'Introductory course to the medical PhD program, INTRO II'
    ,'Introduction to infectious disease modelling', 'Molecular medicine (national course)'
    ,'Introductory course to cardiovascular research and medicine', 'Introductory course in statistics'
    , 'Essentials of Neurophysiology: from neurons to circuits to behaviours'
    , 'Flow cytometry in medical research and diagnostics'
];

    var history = [
    'Magic, Medicine, and Science','Western Civilization','UHC Western Civilization','Religions of the West'
    ,'Russia to 1860','East Asian Civilization to 1800','Colonial Latin America','World History'
    ,'Ancient Worlds','Religion in Asia','Introduction to Islamic Civilization','Women and Men in the Ancient Mediterranean'
    ,'History of Africa Before 1800','Anglo-Dutch Achievement 1550-1750'
    ,'Medieval History 1','Medieval History 2','Medieval World','The West and the World'
    ,'Intro to the Renaissance','Renaissance to the Reformation','Tudor England','Stuart England'
    ,'Medieval Government and Society','English Origins of American Law','Ancient China','Late Imperial China'
    ,'History Of Japan To 1868','East Asian Buddhism','Chinese Religious Traditions','Japanese Religious Traditions'
    ,'Confucianism: Basic Texts','United States Colonial','American Revolution'
    ,'West Africa in the Era of the Slave Trade','Chan/Zen Buddhism','Ottoman History'
    ,'Religion in India I','Medieval Jewish Civilization','Israel in the Biblical Age'
    ,'Jewish-Christian Relations','Origins of Christianity','Varieties of Early Christianity'
    ,'Roman History','Greek History','Alexander and the Hellenistic Age'
    ,'Mediterranean World'
    ,'THE IRISH IN AMERICA','GLOBALIZATION AND HISTORY','Anglo-Dutch Achievement 1550-1750','Women in Modern Europe'
];

    var computerScience = [    
    'Introduction to Programming','Introduction to Programming Logic','Object-oriented programming'
    ,'Dynamic programming','Algorithms','Programming Languages','Theory of programming languages'
    ,'Compilers and language theory','DirectX','OpenGL','Shell Scripting','Python'
    ,'libavg','pyOpenGL','JavaScript','jQuery','PHP','Ruby','Java'
    ,'Introduction to Programming in Java','Java tutorial','Web programming, an example','C'
    ,'Objective-C','C++, .NET','Assembly','VHDL','Software/Application engineering'
    ,'Software project management','Databases','Modelling'
    ,'User interfaces','Software testing','Software quality assurance test'
    ,'Service Oriented Architecture','Computer Graphics Programming',
    ,'Networking','Wireless systems','Information security','Cryptography'
    ,'Client/Server and other types of communication','Server administration'
    ,'Data Management','Server content : Files and Databases', 'Anlytics and specifications'
    ,'Deep learning basics', 'Virtual and augmented reality', 'Writing bachelors basics',
    'Computer phylosophy'
];

    function returnDesc(id){
        return 'This is the ' + id + ' course in the university';
    }

const stream = fs.createWriteStream("./data/Courses.txt");

start = 1;
 //NEED ADD DB LOGIC
    for (let j = 0; j <computerScience.length; j++){
        stream.write('INSERT INTO Course ( Course_ID \r\n , Course_name \r\n , Course_description \r\n) \r\n\r\n');
        stream.write('VALUES\r\n');

        stream.write('(\r\n');
        stream.write(start + '\r\n');
        stream.write(', \'' + computerScience[j] + '\'\r\n');
        stream.write(', \'' + returnDesc(start) + '\'\r\n');
        start++;
        stream.write(');\r\n\r\n');
    }

    for (let j = 0; j <medics.length; j++){
        stream.write('INSERT INTO Course ( Course_ID \r\n , Course_name \r\n , Course_description \r\n) \r\n\r\n');
        stream.write('VALUES\r\n');

        stream.write('(\r\n');
        stream.write(start + '\r\n');
        stream.write(', \'' + medics[j] + '\'\r\n');
        stream.write(', \'' + returnDesc(start) + '\'\r\n');
        start++;   
        stream.write(');\r\n\r\n');
    }

    for (let j = 0; j <law.length; j++){
        stream.write('INSERT INTO Course ( Course_ID \r\n , Course_name \r\n , Course_description \r\n) \r\n\r\n');
        stream.write('VALUES\r\n');

        stream.write('(\r\n');
        stream.write(start + '\r\n');
        stream.write(', \'' + law[j] + '\'\r\n');
        stream.write(', \'' + returnDesc(start) + '\'\r\n');
        start++;
        stream.write(');\r\n\r\n');
    }

    for (let j = 0; j < history.length; j++){
        stream.write('INSERT INTO Course ( Course_ID \r\n , Course_name \r\n , Course_description \r\n) \r\n\r\n');
        stream.write('VALUES\r\n');

        stream.write('(\r\n');
        stream.write(start + '\r\n');
        stream.write(', \'' + history[j] + '\'\r\n');
        stream.write(', \'' + returnDesc(start) + '\'\r\n');
        start++;
        stream.write(');\r\n\r\n');
    }
    
    stream.close();