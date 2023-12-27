import axios from "axios"
import { parse } from 'node-html-parser'
import { course } from "../types"
import { departmentCodes } from "./constants";
import qs from "qs";

  

function getCourses(): course[] | null{
    const URL = "https://studentservices.uwo.ca/secure/timetables/mastertt/ttindex.cfm"

    let data = qs.stringify({
        'subject': 'HEALTSCI',
        'Designation': 'Any',
        'catalognbr': '',
        'CourseTime': 'All',
        'Component': 'All',
        'LocationCode': 'Any',
        'command': 'search' 
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://studentservices.uwo.ca/secure/timetables/mastertt/ttindex.cfm',
        headers: { 
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
      };



    axios.post(URL, )

    return null;
}



<option value="ACTURSCI"  > Actuarial Science 
<option value="ASL"  > American Sign Language 
<option value="AMERICAN"  > American Studies 
<option value="ADS"  > Analytics and Decision Science 
<option value="ANATCELL"  > Anatomy and Cell Biology 
<option value="ANTHRO"  > Anthropology 
<option value="APPLMATH"  > Applied Mathematics 
<option value="ARABIC"  > Arabic 
<option value="AH"  > Art History 
<option value="AISE"  > Artificial Intelligence SysEng 
<option value="ARTHUM"  > Arts and Humanities 
<option value="ASTRONOM"  > Astronomy 
<option value="BIBLSTUD"  > Biblical Studies 
<option value="BIOCHEM"  > Biochemistry 
<option value="BIOLOGY"  > Biology 
<option value="BME"  > Biomedical Engineering 
<option value="BIOSTATS"  > Biostatistics 
<option value="BUSINESS"  > Business Administration 
<option value="CALCULUS"  > Calculus 
<option value="CGS"  > Centre for Global Studies 
<option value="CBE"  > Chem & Biochem Engineering 
<option value="CHEMBIO"  > Chemical Biology 
<option value="CHEM"  > Chemistry 
<option value="CYS"  > Childhood and Youth Studies 
<option value="CHINESE"  > Chinese 
<option value="CHURCH"  > Church History 
<option value="CHURLAW"  > Church Law 
<option value="CHURMUSI"  > Church Music 
<option value="CEE"  > Civil & Envrnmntl Engineering 
<option value="CLASSICS"  > Classical Studies 
<option value="CMBPROG"  > Combined Program Enrollment 
<option value="COMMSCI"  > Communication Sci & Disorders 
<option value="COMPLIT"  > Comparative Lit & Culture 
<option value="COMPSCI"  > Computer Science 
<option value="CA"  > Creative Arts 
<option value="DANCE"  > Dance 
<option value="DATASCI"  > Data Science 
<option value="DIGICOMM"  > Digital Communication 
<option value="DIGIHUM"  > Digital Humanities 
<option value="DISABST"  > Disability Studies 
<option value="EARTHSCI"  > Earth Sciences 
<option value="ECONOMIC"  > Economics 
<option value="EDUC"  > Education 
<option value="ECE"  > Elect & Computer Engineering 
<option value="ELI"  > Engineering Leadership & Innov 
<option value="ENGSCI"  > Engineering Science 
<option value="ENGLISH"  > English 
<option value="ENVIRSCI"  > Environmental Science 
<option value="EPID"  > Epidemiology 
<option value="EPIDEMIO"  > Epidemiology & Biostatistics 
<option value="FIMS"  > FIMS 
<option value="FAMLYSTU"  > Family Studies & Human Develop 
<option value="FLDEDUC"  > Field Education 
<option value="FILM"  > Film Studies 
<option value="FINMOD"  > Financial Modelling 
<option value="FOODNUTR"  > Foods and Nutrition 
<option value="FRENCH"  > French 
<option value="GSWS"  > Gender, Sexuality, & Womens St 
<option value="GEOGRAPH"  > Geography 
<option value="GERMAN"  > German 
<option value="GGB"  > Global Great Books 
<option value="GLE"  > Governance,Leadership & Ethics 
<option value="GREEK"  > Greek 
<option value="GPE"  > Green Process Engineering 
<option value="HEALTSCI"  > Health Sciences 
<option value="HEBREW"  > Hebrew 
<option value="HISTTHEO"  > Historical Theology 
<option value="HISTORY" selected > History 
<option value="HISTSCI"  > History of Science 
<option value="HOMILET"  > Homiletics 
<option value="HUMANECO"  > Human Ecology 
<option value="HUMANRS"  > Human Rights Studies 
<option value="INDIGSTU"  > Indigenous Studies 
<option value="IE"  > Integrated Engineering 
<option value="INTEGSCI"  > Integrated Science 
<option value="ICC"  > Intercultural Communications 
<option value="INTERDIS"  > Interdisciplinary Studies 
<option value="INTREL"  > International Relations 
<option value="ITALIAN"  > Italian 
<option value="JAPANESE"  > Japanese 
<option value="JEWISH"  > Jewish Studies 
<option value="KINESIOL"  > Kinesiology 
<option value="LATIN"  > Latin 
<option value="LAW"  > Law 
<option value="LS"  > Leadership Studies 
<option value="LINGUIST"  > Linguistics 
<option value="LITURST"  > Liturgical Studies 
<option value="LITURGIC"  > Liturgics 
<option value="MOS"  > Management & Organizational St 
<option value="MATH"  > Mathematics 
<option value="MME"  > Mech & Materials Engineering 
<option value="MSE"  > Mechatronic Systems Engineerin 
<option value="MIT"  > Media, Information &Technocult 
<option value="MBI"  > Medical Bioinformatics 
<option value="MEDBIO"  > Medical Biophysics 
<option value="MEDSCIEN"  > Medical Sciences 
<option value="MEDIEVAL"  > Medieval Studies 
<option value="MICROIMM"  > Microbiology & Immunology 
<option value="MORALTHE"  > Moral Theology 
<option value="MCS"  > Museum and Curatorial Studies 
<option value="MUSIC"  > Music 
<option value="NEURO"  > Neuroscience 
<option value="NMM"  > Numerical & Mathematical Methd 
<option value="NURSING"  > Nursing 
<option value="ONEHEALT"  > One Health 
<option value="PASTTHEO"  > Pastoral Theology 
<option value="PATHOL"  > Pathology 
<option value="PHARM"  > Pharmacology 
<option value="PHILST"  > Philosophical Studies 
<option value="PHILOSOP"  > Philosophy 
<option value="PHYSICS"  > Physics 
<option value="PHYSIOL"  > Physiology 
<option value="PHYSPHRM"  > Physiology and Pharmacology 
<option value="POLISCI"  > Political Science 
<option value="PPE"  > Politics, Philosophy, Economic 
<option value="PSYCHOL"  > Psychology 
<option value="REHABSCI"  > Rehabilitation Sciences 
<option value="RELEDUC"  > Religious Education 
<option value="RELSTUD"  > Religious Studies 
<option value="SACRTHEO"  > Sacramental Theology 
<option value="SCHOLARS"  > Scholars Electives 
<option value="SCIENCE"  > Science 
<option value="SOCLJUST"  > Social Justice & Peace Studies 
<option value="SOCSCI"  > Social Science 
<option value="SOCWORK"  > Social Work 
<option value="SOCIOLOG"  > Sociology 
<option value="SE"  > Software Engineering 
<option value="SPANISH"  > Spanish 
<option value="SPEECH"  > Speech 
<option value="SPIRTHEO"  > Spiritual Theology 
<option value="STATS"  > Statistical Sciences 
<option value="SA"  > Studio Art 
<option value="SUPPAST"  > Supervised Pastoral Education 
<option value="SYSTHEO"  > Systematic Theology 
<option value="THANAT"  > Thanatology 
<option value="TNLA"  > The New Liberal Arts 
<option value="THEATRE"  > Theatre Studies 
<option value="THEOETH"  > Theological Ethics 
<option value="THEOLST"  > Theological Studies 
<option value="THESIS"  > Thesis 
<option value="TJ"  > Transitional Justice 
<option value="UGRD"  > Undergraduate Studies 
<option value="WELC"  > Western English Language Cen 
<option value="WRITING"  > Writing 