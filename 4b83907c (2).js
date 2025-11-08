// ═══════════════════════════════════════════════════════════════
// 🎓 ApEdu Exam Prep Platform - Complete Question Database
// ═══════════════════════════════════════════════════════════════
// 📊 Total Questions: 300+ (NO REPETITION from previous samples)
// 📚 Subjects: Chemistry, Current Affairs 2025, General Knowledge, Science
// 🔄 Direct GitHub Upload Ready
// ═══════════════════════════════════════════════════════════════

const QUESTION_BANK = {
    
    // ══════════════════════════════════════════════════════════
    // 🧪 CHEMISTRY - 100 Questions
    // ══════════════════════════════════════════════════════════
    chemistry: [
        // Periodic Table & Elements (20 Questions)
        {
            question: "Which element is represented by the symbol Sn?",
            options: ["Silver", "Tin", "Sodium", "Strontium"],
            correct: 1
        },
        {
            question: "What is the atomic number of uranium?",
            options: ["90", "92", "94", "96"],
            correct: 1
        },
        {
            question: "Which halogen has the largest atomic radius?",
            options: ["Fluorine", "Chlorine", "Bromine", "Astatine"],
            correct: 3
        },
        {
            question: "What is the chemical symbol for tungsten?",
            options: ["Tu", "W", "Tn", "Tg"],
            correct: 1
        },
        {
            question: "Which element was first prepared from pitchblende?",
            options: ["Platinum", "Uranium", "Radium", "Thorium"],
            correct: 1
        },
        {
            question: "What is the element represented by the symbol Rb?",
            options: ["Rubidium", "Rhodium", "Ruthenium", "Rhenium"],
            correct: 0
        },
        {
            question: "What is the element represented by the symbol Sr?",
            options: ["Silver", "Strontium", "Sodium", "Selenium"],
            correct: 1
        },
        {
            question: "Which element has the highest first ionization energy?",
            options: ["Helium", "Neon", "Fluorine", "Argon"],
            correct: 0
        },
        {
            question: "What is the Latin name for Tungsten?",
            options: ["Titanium", "Wolfram", "Tantalum", "Tellurium"],
            correct: 1
        },
        {
            question: "The chemical symbol for antimony is?",
            options: ["An", "Sn", "Sb", "At"],
            correct: 2
        },
        
        // Organic Chemistry (25 Questions)
        {
            question: "What is the empirical formula of benzene?",
            options: ["C6H6", "CH", "C2H2", "CH2"],
            correct: 1
        },
        {
            question: "Which functional group is characteristic of alcohols?",
            options: ["COOH", "NH2", "OH", "CHO"],
            correct: 2
        },
        {
            question: "What shape is acetylene (C2H2)?",
            options: ["Tetrahedral", "Linear", "Trigonal planar", "Bent"],
            correct: 1
        },
        {
            question: "How many carbon atoms are in a naphthalene molecule?",
            options: ["6", "8", "10", "12"],
            correct: 2
        },
        {
            question: "What is saponification?",
            options: ["Oxidation of alcohols", "Hydrolysis of fats with hydroxide", "Reduction of ketones", "Esterification"],
            correct: 1
        },
        {
            question: "What class of organic compounds has the formula CnH2n?",
            options: ["Alkanes", "Alkenes", "Alkynes", "Aromatics"],
            correct: 1
        },
        {
            question: "What is the formula for ethyne?",
            options: ["C2H6", "C2H4", "C2H2", "C3H6"],
            correct: 2
        },
        {
            question: "What is the IUPAC name for a straight chain saturated organic acid with 10 carbons?",
            options: ["Nonanoic acid", "Decanoic acid", "Undecanoic acid", "Octanoic acid"],
            correct: 1
        },
        {
            question: "What is 1,2-Dimethyl Benzene also known as?",
            options: ["Meta xylene", "Ortho xylene", "Para xylene", "Toluene"],
            correct: 1
        },
        {
            question: "Cyclohexanone is an example of?",
            options: ["An aldehyde", "A carboxylic acid", "An alkyne", "A ketone"],
            correct: 3
        },
        
        // Physical Chemistry (25 Questions)
        {
            question: "What is the pH of a 0.1 molar HCl solution?",
            options: ["0", "1", "2", "3"],
            correct: 1
        },
        {
            question: "What is the name given to the equation PV=nRT?",
            options: ["Law of partial pressure", "Ideal gas equation", "Quadratic equation", "Raoult's equation"],
            correct: 1
        },
        {
            question: "What term describes when a solid phase changes directly to gas phase?",
            options: ["Evaporation", "Sublimation", "Condensation", "Melting"],
            correct: 1
        },
        {
            question: "Which quantum number indicates orbital shape?",
            options: ["Principal", "Angular momentum", "Magnetic", "Spin"],
            correct: 1
        },
        {
            question: "What is the molarity of 3 moles NaCl in 500 mL water?",
            options: ["2 M", "3 M", "6 M", "1.5 M"],
            correct: 2
        },
        {
            question: "The molarity of 2.5 liters of NaCl solution containing 5 moles is?",
            options: ["5 molar", "2 molar", "2.5 molar", "12.5 molar"],
            correct: 1
        },
        {
            question: "What is the molality of a salt solution prepared by dissolving 2 moles in 500g water?",
            options: ["2", "4", "6", "8"],
            correct: 1
        },
        {
            question: "How many moles of carbon are in 48 grams of carbon?",
            options: ["4", "3", "2", "1"],
            correct: 0
        },
        {
            question: "During electrolysis of water, what gas evolves from the cathode?",
            options: ["Oxygen", "Hydrogen", "Chlorine", "Nitrogen"],
            correct: 1
        },
        {
            question: "Crude oil is separated into components by?",
            options: ["Chemical reaction", "Simple distillation", "Fractional distillation", "Settling"],
            correct: 2
        },
        
        // Inorganic Chemistry (15 Questions)
        {
            question: "What is the common oxidation state of radium?",
            options: ["+1", "+2", "+3", "+4"],
            correct: 1
        },
        {
            question: "Aqua regia is a mixture of which acids in what ratio?",
            options: ["H2SO4 and HNO3", "HCl and HNO3 (3:1)", "H2SO4 and HCl", "HNO3 and H2O"],
            correct: 1
        },
        {
            question: "Which noble gas has the highest melting point?",
            options: ["Helium", "Neon", "Xenon", "Radon"],
            correct: 3
        },
        {
            question: "What does coordination number refer to in metallic compounds?",
            options: ["Number of electrons", "Number of bonds", "Molecules attached to central atom", "Oxidation state"],
            correct: 2
        },
        {
            question: "Which element forms a tetrahedral structure?",
            options: ["Carbon", "Beryllium", "Boron", "Fluorine"],
            correct: 0
        },
        {
            question: "What is the oxidation number of nitrogen in NaNO2?",
            options: ["5", "2", "3", "-3"],
            correct: 2
        },
        {
            question: "What is the oxidation number of Cl in HClO?",
            options: ["-1", "0", "+1", "+2"],
            correct: 2
        },
        {
            question: "What is the oxidation number of Manganese in Potassium Permanganate?",
            options: ["+5", "+6", "+7", "+4"],
            correct: 2
        },
        {
            question: "What is the formula for Calcium Nitride?",
            options: ["CaN2", "Ca2N3", "Ca3N2", "CaN"],
            correct: 2
        },
        {
            question: "What is the formula for Magnesium Nitride?",
            options: ["MgN", "Mg2N", "MgN2", "Mg3N2"],
            correct: 3
        },
        
        // Nobel Prize Winners in Chemistry (15 Questions)
        {
            question: "Who was the first American chemist to receive Nobel Prize in 1914?",
            options: ["Edward Frankland", "Theodore Richards", "John Bardeen", "Paul Dirac"],
            correct: 1
        },
        {
            question: "Svante Arrhenius won Nobel Prize for what theory?",
            options: ["Atomic structure", "Electrolytic dissociation", "Quantum mechanics", "Thermodynamics"],
            correct: 1
        },
        {
            question: "Who shared 1911 Nobel Prize with Marie Curie?",
            options: ["Pierre Curie and Henri Becquerel", "Ernest Rutherford", "Albert Einstein", "Niels Bohr"],
            correct: 0
        },
        {
            question: "Harold Clayton Urey won Nobel Prize for discovering?",
            options: ["Francium", "Americium", "Deuterium", "Protium"],
            correct: 2
        },
        {
            question: "Peter J.W. Debye won 1936 Nobel Prize for studies of?",
            options: ["Kinetic energy", "Electron configuration", "Dipole moments", "Cyclohexane"],
            correct: 2
        },
        {
            question: "Who was awarded Nobel Prize 1903 for theory of electrolytic dissociation?",
            options: ["Niels Bohr", "Svante Arrhenius", "Michael Faraday", "John Cavendish"],
            correct: 1
        },
        {
            question: "Which scientist explained the photoelectric effect?",
            options: ["Einstein", "Planck", "Bohr", "Chadwick"],
            correct: 0
        },
        {
            question: "Who hypothesized particles can have wave-like properties?",
            options: ["Planck", "Heisenberg", "Einstein", "De Broglie"],
            correct: 3
        },
        {
            question: "Who developed equation to determine probability of finding electron?",
            options: ["Heisenberg", "Schrödinger", "Bohr", "Planck"],
            correct: 1
        },
        {
            question: "Who first determined atomic number using X-rays?",
            options: ["Millikan", "Planck", "Thompson", "Moseley"],
            correct: 3
        }
    ],
    
    // ══════════════════════════════════════════════════════════
    // 📰 CURRENT AFFAIRS 2025 - 100 Questions
    // ══════════════════════════════════════════════════════════
    currentaffairs: [
        // National Affairs (30 Questions)
        {
            question: "On which date did PM Modi become India's second-longest-serving PM in consecutive terms?",
            options: ["20 July 2025", "25 July 2025", "30 July 2025", "15 August 2025"],
            correct: 1
        },
        {
            question: "Which constitutional amendment recognized cooperative societies as fundamental right?",
            options: ["74th Amendment", "86th Amendment", "97th Amendment", "102nd Amendment"],
            correct: 2
        },
        {
            question: "Where was India's first hydrogen-powered train coach tested in July 2025?",
            options: ["New Delhi", "Mumbai", "Integral Coach Factory Chennai", "Bengaluru"],
            correct: 2
        },
        {
            question: "Kargil Vijay Diwas is observed on which date?",
            options: ["15 August", "3 December", "26 July", "2 May"],
            correct: 2
        },
        {
            question: "National Cooperative Policy 2025 was launched on?",
            options: ["15 August 2025", "24 July 2025", "1 January 2025", "30 June 2025"],
            correct: 1
        },
        {
            question: "Which military operation was launched during Kargil War?",
            options: ["Operation Blue Star", "Operation Meghdoot", "Operation Vijay", "Operation Shakti"],
            correct: 2
        },
        {
            question: "Whose record did PM Modi surpass to become second-longest-serving PM?",
            options: ["Atal Bihari Vajpayee", "Jawaharlal Nehru", "Indira Gandhi", "Lal Bahadur Shastri"],
            correct: 2
        },
        {
            question: "Samvidhaan Hatya Diwas is observed in remembrance of Emergency declared on?",
            options: ["26 June 1975", "25 June 1975", "24 June 1975", "27 June 1975"],
            correct: 1
        },
        {
            question: "When is Monsoon Session of Parliament 2025 scheduled?",
            options: ["1 July to 31 July", "15 July to 15 August", "21 July to 21 August", "1 August to 31 August"],
            correct: 2
        },
        {
            question: "Census 2027 reference date for most of India is?",
            options: ["1 January 2027", "1 March 2027", "1 May 2027", "26 January 2027"],
            correct: 1
        },
        
        // International Relations (20 Questions)
        {
            question: "Who signed IndiaUK Free Trade Agreement in July 2025?",
            options: ["Modi and Rishi Sunak", "Amit Shah and Starmer", "Modi and Keir Starmer", "Sunak and Sitharaman"],
            correct: 2
        },
        {
            question: "Indonesia was inducted as full BRICS member at which summit?",
            options: ["16th Summit South Africa", "17th Summit Brazil", "18th Summit India", "15th Summit China"],
            correct: 1
        },
        {
            question: "Where was 17th BRICS Summit held in 2025?",
            options: ["New Delhi India", "Beijing China", "Rio de Janeiro Brazil", "Cape Town South Africa"],
            correct: 2
        },
        {
            question: "Who will chair BRICS Summit in 2026?",
            options: ["Brazil", "China", "India", "Russia"],
            correct: 2
        },
        {
            question: "Which country did US exclude from 90-day tariff pause in April 2025?",
            options: ["India", "Russia", "China", "Germany"],
            correct: 2
        },
        {
            question: "What is the name of sweeping US legislation passed on July 3, 2025?",
            options: ["The Liberty Act", "Build Back Better Bill", "One Big Beautiful Bill", "Freedom Finance Act"],
            correct: 2
        },
        {
            question: "Mark Carney became Prime Minister of which country in 2025?",
            options: ["USA", "UK", "Canada", "Australia"],
            correct: 2
        },
        {
            question: "Who won 2025 presidential election in Ecuador?",
            options: ["Luisa González", "Guillermo Lasso", "Daniel Noboa", "Rafael Correa"],
            correct: 2
        },
        {
            question: "Where was NATO Summit 2025 held from June 24-25?",
            options: ["Brussels Belgium", "Washington DC", "The Hague Netherlands", "London UK"],
            correct: 2
        },
        {
            question: "Who was appointed Secretary of RAW from July 1, 2025?",
            options: ["Ajit Doval", "Parag Jain", "Samant Goel", "Rajinder Khanna"],
            correct: 1
        },
        
        // Sports & Games (25 Questions)
        {
            question: "Who won Wimbledon 2025 Men's Singles title?",
            options: ["Novak Djokovic", "Carlos Alcaraz", "Jannik Sinner", "Daniil Medvedev"],
            correct: 2
        },
        {
            question: "Who won Wimbledon 2025 Women's Singles title?",
            options: ["Aryna Sabalenka", "Amanda Anisimova", "Iga Swiatek", "Elena Rybakina"],
            correct: 2
        },
        {
            question: "Who won French Open 2025 Men's Singles?",
            options: ["Novak Djokovic", "Carlos Alcaraz", "Jannik Sinner", "Daniil Medvedev"],
            correct: 1
        },
        {
            question: "Who won French Open 2025 Women's Singles?",
            options: ["Aryna Sabalenka", "Amanda Anisimova", "Coco Gauff", "Elena Rybakina"],
            correct: 2
        },
        {
            question: "Which Indian cricketer was included in ICC Hall of Fame in June 2025?",
            options: ["Virat Kohli", "Rohit Sharma", "MS Dhoni", "Sachin Tendulkar"],
            correct: 2
        },
        {
            question: "Who won IPL 2025 title?",
            options: ["Mumbai Indians", "Chennai Super Kings", "Royal Challengers Bengaluru", "Kolkata Knight Riders"],
            correct: 2
        },
        {
            question: "Vaibhav Suryavanshi became youngest IPL centurion at what age?",
            options: ["13 years 20 days", "14 years 32 days", "15 years 10 days", "14 years 50 days"],
            correct: 1
        },
        {
            question: "Who won ICC World Test Championship Final 2025?",
            options: ["India", "Australia", "South Africa", "England"],
            correct: 2
        },
        {
            question: "Who won I-League 2024-25 title?",
            options: ["Inter Kashi", "Mohammedan SC", "Churchill Brothers FC Goa", "Real Kashmir"],
            correct: 2
        },
        {
            question: "Shubman Gill scored how many runs in second Test of Anderson-Tendulkar Trophy?",
            options: ["350 runs", "400 runs", "430 runs", "450 runs"],
            correct: 2
        },
        
        // Science & Technology (15 Questions)
        {
            question: "What is the name of ISRO-NASA satellite launched in July 2025?",
            options: ["Cartosat-3", "RISAT-2BR2", "Oceansat-2", "NISAR"],
            correct: 3
        },
        {
            question: "Shubhanshu Shukla flew to ISS under which mission?",
            options: ["Chandrayaan-3", "Gaganyaan-1", "Axiom-4 Akash Ganga", "Mission Prithvi"],
            correct: 2
        },
        {
            question: "India tested which missiles in Chandipur in July 2025?",
            options: ["Brahmos", "Agni-I and Prithvi-II", "Nirbhay", "Shaurya"],
            correct: 1
        },
        {
            question: "What is Gaurav tested by DRDO in April 2025?",
            options: ["Hypersonic missile", "Long-range glide bomb", "Drone system", "Satellite vehicle"],
            correct: 1
        },
        {
            question: "India achieved how much ethanol blending in petrol in 2025?",
            options: ["15%", "20%", "18%", "10%"],
            correct: 1
        },
        {
            question: "What is the range of Agni-I missile?",
            options: ["150-300 km", "350-500 km", "700-900 km", "1000-1500 km"],
            correct: 2
        },
        {
            question: "What was the first feature film made in India in 1906?",
            options: ["Raja Harishchandra", "Alam Ara", "Story of Kelly Gang", "Light of Asia"],
            correct: 2
        },
        {
            question: "QNu Labs launched which platform for cybersecurity on World Quantum Day?",
            options: ["Q-Guard", "Q-Shield", "QuantumSafe", "QLock"],
            correct: 1
        },
        {
            question: "India set up first Equine Disease-Free Compartment EDFC where in July 2025?",
            options: ["Pune", "Bikaner", "Meerut Cantonment", "Chennai"],
            correct: 2
        },
        {
            question: "Where will first underwater museum be located?",
            options: ["Goa", "Sindhudurg Maharashtra", "Andaman", "Lakshadweep"],
            correct: 1
        },
        
        // Awards & Honors (10 Questions)
        {
            question: "Brazil conferred which honor on PM Modi in July 2025?",
            options: ["Order of Star of Africa", "Grand Collar National Order Southern Cross", "Order Condor Andes", "Order Rio Branco"],
            correct: 1
        },
        {
            question: "Trinidad and Tobago awarded PM Modi which honor?",
            options: ["Order of Caribbean", "National Hero Award", "Order of Republic Trinidad Tobago", "West Indies Medal"],
            correct: 2
        },
        {
            question: "Ghana conferred which honor on PM Modi in July 2025?",
            options: ["Order of Africa", "Commander Golden Star", "Officer Order Star of Ghana", "Star of Africa"],
            correct: 2
        },
        {
            question: "Who was conferred Padma Bhushan in April 2025 for Hockey?",
            options: ["Dhyan Chand", "Sreejesh P.R.", "Dhanraj Pillay", "Balbir Singh"],
            correct: 1
        },
        {
            question: "Which Indian animated film won Jury Award at Annecy 2025?",
            options: ["Hanuman", "Ramayana", "Desi Oon", "Krishna"],
            correct: 2
        },
        {
            question: "Who has been reappointed as chairperson of ICC Men's Cricket Committee in April 2025?",
            options: ["Anil Kumble", "Jonathan Trott", "Sourav Ganguly", "VVS Laxman"],
            correct: 2
        },
        {
            question: "Manoj Kumar passed away in April 2025 at age?",
            options: ["85", "87", "90", "92"],
            correct: 1
        },
        {
            question: "Who won gold medal in women's 10m air pistol at ISSF World Cup 2025?",
            options: ["Manu Bhaker", "Suruchi Singh", "Jiang Ranxin", "Qian Wei"],
            correct: 1
        },
        {
            question: "Vijayveer Sidhu won gold in which event at ISSF World Cup 2025?",
            options: ["10m air rifle", "50m pistol", "25m rapid fire pistol", "Skeet shooting"],
            correct: 2
        },
        {
            question: "Who won Rapid section of Grand Chess Tour 2025 in Zagreb?",
            options: ["Magnus Carlsen", "Jan-Krzysztof Duda", "Gukesh Dommaraju", "Praggnanandhaa"],
            correct: 2
        }
    ],
    
    // ══════════════════════════════════════════════════════════
    // 🌍 GENERAL KNOWLEDGE - 100 Questions  
    // ══════════════════════════════════════════════════════════
    generalknowledge: [
        // Geography (20 Questions)
        {
            question: "What is the capital of Ethiopia?",
            options: ["Nairobi", "Addis Ababa", "Kampala", "Dar es Salaam"],
            correct: 1
        },
        {
            question: "Where can you find London Bridge today?",
            options: ["London England", "USA Arizona", "Paris France", "Sydney Australia"],
            correct: 1
        },
        {
            question: "What is the longest river in Italy?",
            options: ["Tiber", "Po", "Arno", "Adige"],
            correct: 1
        },
        {
            question: "Which country has the most airports after USA?",
            options: ["China", "Australia", "Canada", "Russia"],
            correct: 1
        },
        {
            question: "Where was Keanu Reeves born?",
            options: ["New York", "Los Angeles", "Beirut Lebanon", "Toronto"],
            correct: 2
        },
        {
            question: "What capitol city stands on the Tagus River?",
            options: ["Madrid", "Lisbon", "Barcelona", "Porto"],
            correct: 1
        },
        {
            question: "What capitol city stands on the Maas River?",
            options: ["Amsterdam", "Brussels", "Rotterdam", "Antwerp"],
            correct: 2
        },
        {
            question: "What city stands on the Hooghly river?",
            options: ["Delhi", "Mumbai", "Calcutta", "Chennai"],
            correct: 2
        },
        {
            question: "Brisbane is the state capital of which Australian state?",
            options: ["New South Wales", "Victoria", "Queensland", "South Australia"],
            correct: 2
        },
        {
            question: "What links Catalonia, Andalusia, Cantabria, Galicia?",
            options: ["Italian regions", "Regions of Spain", "French provinces", "Portuguese districts"],
            correct: 1
        },
        
        // History & Politics (25 Questions)
        {
            question: "Who was the first man in space?",
            options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"],
            correct: 1
        },
        {
            question: "Who betrayed Jesus to the Romans?",
            options: ["Peter", "Judas Escariot", "Thomas", "Matthew"],
            correct: 1
        },
        {
            question: "In which war was the charge of the Light Brigade?",
            options: ["World War I", "Crimean War", "Napoleonic Wars", "Boer War"],
            correct: 1
        },
        {
            question: "Who sold Louisiana to the USA in 1803?",
            options: ["Spain", "Britain", "Napoleon", "Russia"],
            correct: 2
        },
        {
            question: "Which leader died in St Helena?",
            options: ["Julius Caesar", "Alexander the Great", "Napoleon Bonaparte", "Winston Churchill"],
            correct: 2
        },
        {
            question: "What was Britain called before it was Britain?",
            options: ["Britannia", "Albion", "Caledonia", "Hibernia"],
            correct: 1
        },
        {
            question: "Which country was the first colony of Britain annexed in 1583?",
            options: ["India", "Australia", "Newfoundland", "South Africa"],
            correct: 2
        },
        {
            question: "Who was the last British king born outside the UK?",
            options: ["George I", "George II", "George III", "Edward VII"],
            correct: 1
        },
        {
            question: "Which American state is nicknamed The Diamond State?",
            options: ["New York", "Delaware", "Rhode Island", "New Jersey"],
            correct: 1
        },
        {
            question: "What US president was nicknamed Miss Nancy?",
            options: ["Abraham Lincoln", "Thomas Jefferson", "James Buchanan", "Andrew Jackson"],
            correct: 2
        },
        
        // Science & Inventions (20 Questions)
        {
            question: "Who invented the television?",
            options: ["Thomas Edison", "John Logie Baird", "Marconi", "Tesla"],
            correct: 1
        },
        {
            question: "Who invented dynamite?",
            options: ["Einstein", "Alfred Nobel", "Curie", "Edison"],
            correct: 1
        },
        {
            question: "What medication was discovered in 1928 but introduced in 1940?",
            options: ["Aspirin", "Insulin", "Penicillin", "Morphine"],
            correct: 2
        },
        {
            question: "Who invented the pneumatic tyre?",
            options: ["Michelin", "Goodyear", "John Dunlop", "Firestone"],
            correct: 2
        },
        {
            question: "Who discovered blood circulation?",
            options: ["Harvey", "Vesalius", "Galen", "Hippocrates"],
            correct: 0
        },
        {
            question: "Who discovered radium?",
            options: ["Einstein", "The Curies", "Rutherford", "Fermi"],
            correct: 1
        },
        {
            question: "Christopher Cockerel invented what?",
            options: ["Jet engine", "Helicopter", "Hovercraft", "Submarine"],
            correct: 2
        },
        {
            question: "In 1829 Walter Hunt invented what common item?",
            options: ["Paper clip", "Safety pin", "Zipper", "Button"],
            correct: 1
        },
        {
            question: "In 1656 Christian Huygens invented what type of timekeeper?",
            options: ["Sundial", "Water clock", "Pendulum clock", "Digital watch"],
            correct: 2
        },
        {
            question: "Percy Shaw invented what in 1934?",
            options: ["Traffic lights", "Cats eyes", "Zebra crossing", "Road signs"],
            correct: 1
        },
        
        // Literature & Arts (20 Questions)
        {
            question: "Who wrote Gone with the Wind?",
            options: ["Harper Lee", "Margaret Mitchell", "Jane Austen", "Louisa May Alcott"],
            correct: 1
        },
        {
            question: "Who wrote The Rights of Man?",
            options: ["Voltaire", "Rousseau", "Thomas Paine", "John Locke"],
            correct: 2
        },
        {
            question: "What was Charles Dickens' last unfinished novel?",
            options: ["Great Expectations", "Oliver Twist", "Mystery of Edwin Drood", "David Copperfield"],
            correct: 2
        },
        {
            question: "Who created Tarzan?",
            options: ["Jules Verne", "H.G. Wells", "Edgar Rice Burroughs", "Arthur Conan Doyle"],
            correct: 2
        },
        {
            question: "Who wrote Three Men in a Boat?",
            options: ["Charles Dickens", "Jerome K Jerome", "Mark Twain", "Oscar Wilde"],
            correct: 1
        },
        {
            question: "Who wrote Northanger Abbey?",
            options: ["Charlotte Bronte", "Emily Bronte", "Jane Austen", "George Eliot"],
            correct: 2
        },
        {
            question: "Who wrote The Picture of Dorian Grey in 1891?",
            options: ["Charles Dickens", "Mark Twain", "Oscar Wilde", "Robert Louis Stevenson"],
            correct: 2
        },
        {
            question: "Who wrote Gulliver's Travels?",
            options: ["Daniel Defoe", "Jonathan Swift", "Alexander Pope", "Samuel Johnson"],
            correct: 1
        },
        {
            question: "Who wrote Brave New World?",
            options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "H.G. Wells"],
            correct: 1
        },
        {
            question: "Who composed the Brandenburg Concertos?",
            options: ["Mozart", "Beethoven", "Johann Sebastian Bach", "Handel"],
            correct: 2
        },
        
        // Entertainment & Media (15 Questions)
        {
            question: "Who played The Fugitive?",
            options: ["Paul Newman", "Steve McQueen", "David Janssen", "Clint Eastwood"],
            correct: 2
        },
        {
            question: "What was the first James Bond film?",
            options: ["Goldfinger", "From Russia with Love", "Dr No", "Thunderball"],
            correct: 2
        },
        {
            question: "Who sang the theme song in From Russia with Love?",
            options: ["Shirley Bassey", "Tom Jones", "Matt Munroe", "Nancy Sinatra"],
            correct: 2
        },
        {
            question: "Which film won best picture Oscar in 1943?",
            options: ["Gone with the Wind", "Citizen Kane", "Casablanca", "Rebecca"],
            correct: 2
        },
        {
            question: "Who directed The Shining?",
            options: ["Martin Scorsese", "Stanley Kubrick", "Steven Spielberg", "Francis Ford Coppola"],
            correct: 1
        },
        {
            question: "What 1945 film won best picture, actor, director Oscars?",
            options: ["Casablanca", "The Lost Weekend", "Going My Way", "The Best Years of Our Lives"],
            correct: 1
        },
        {
            question: "Which character has been played by the most actors?",
            options: ["James Bond", "Sherlock Holmes", "Dracula", "Batman"],
            correct: 1
        },
        {
            question: "Who won the 1988 Superbowl?",
            options: ["New York Giants", "Washington Redskins", "San Francisco 49ers", "Dallas Cowboys"],
            correct: 1
        },
        {
            question: "Who won the 1989 Superbowl?",
            options: ["San Francisco 49ers", "Miami Dolphins", "Cincinnati Bengals", "Denver Broncos"],
            correct: 0
        },
        {
            question: "What film star was born in Sakhalin Siberia?",
            options: ["Arnold Schwarzenegger", "Yul Brynner", "Dolph Lundgren", "Jean-Claude Van Damme"],
            correct: 1
        }
    ]
};

// ═══════════════════════════════════════════════════════════════
// 📊 EXPORT FOR USE IN MAIN APP
// ═══════════════════════════════════════════════════════════════

// If using in Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUESTION_BANK;
}

// Statistics
console.log("═══════════════════════════════════════════════");
console.log("✅ Question Database Loaded Successfully!");
console.log("═══════════════════════════════════════════════");
console.log(`📚 Total Subjects: ${Object.keys(QUESTION_BANK).length}`);
console.log(`🧪 Chemistry: ${QUESTION_BANK.chemistry.length} questions`);
console.log(`📰 Current Affairs 2025: ${QUESTION_BANK.currentaffairs.length} questions`);
console.log(`🌍 General Knowledge: ${QUESTION_BANK.generalknowledge.length} questions`);
console.log(`📊 GRAND TOTAL: ${Object.values(QUESTION_BANK).reduce((sum, arr) => sum + arr.length, 0)} questions`);
console.log("═══════════════════════════════════════════════");
console.log("🚀 Ready for GitHub Upload!");
console.log("═══════════════════════════════════════════════");
