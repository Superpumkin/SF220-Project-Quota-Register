import {writable} from 'svelte/store';
let subject = {
  SF210 : {name : 'SF210', 
           sec1 : 'Section 760001',
           sec2 : 'Section 760002', 
           prof : 'Assoc. Prof. Dr. Weerachai Anotaipaiboon',
           day : 'Tue' ,
           time1 : '09. 30 - 12. 30 น.',
           time2 : '13. 30 - 16. 30 น.',
           credit : '3', 
           cost : '5,400 BAHT', 
           num_student : '21', 
           max_student : '30'},
  
  SF220 : {name : 'SF220', 
           sec : 'Section 760001', 
           prof : 'Assoc. Prof. Dr. Weerachai Anotaipaiboon',
           day : 'Mon', 
           time : '09. 30 - 12. 30 น.', 
           credit : '3', 
           cost : '5,400 BAHT', 
           num_student : '22', 
           max_student : '30'},
 
  SF230 : {name : 'SF230', 
           sec : 'Section 760001', 
           prof : 'Assoc. Prof. Dr. Weerachai Anotaipaiboon',
           day : 'Wed', 
           time : '13. 30 - 16. 30 น.', 
           credit : '3', 
           cost : '5,400 BAHT', 
           num_student : '23', 
           max_student : '30'},
  
  TU107 : {name : 'TU107', 
           sec : 'Section 760001', 
           prof : 'Assoc. Prof. Dr. Weerachai Anotaipaiboon',
           day : 'Thu', 
           time : '13. 30 - 16. 30 น.', 
           credit : '3', 
           cost : '5,400 BAHT', 
           num_student : '17', 
           max_student : '63'},
  
  TU109 : {name : 'TU109', 
           sec : 'Section 760001', 
           prof : 'T. Thanapath Cheeranawanith',
           day : 'Thu', 
           time : '09. 30 - 12. 30', 
           credit : '3', 
           cost : '5,400 BAHT', 
           num_student : '19', 
           max_student : '63'}
}

let name_sub = []

export const vicha = writable(subject);
export const name_subject = writable(name_sub);