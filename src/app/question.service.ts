import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

export interface Questions {
    key: number;
    questions: Question[];
 }

 export interface Question {
    $key: string;
    question: string;
    answer1: string;
    answer2: string;
    answer3: string;
    answer4: string;
 }
 @Injectable({
    providedIn: 'root'
  })


export class QuestionService {
    questionsRef: AngularFireList<any> ;   
    questionRef: AngularFireObject<any>;   
    key = 0;

    constructor(private db: AngularFireDatabase) {
        //this.questionsRef = this.db.collection<Question>('questions-list');
     }

    sendNotes(notes: Question[], email: string) {
        this.questionsRef = this.db.list('/lists');

        // var savedObj = this.questionsRef.push({questions: []})
        // var id = savedObj.key;


        var savedObj = this.questionsRef.push({
            questions: notes,
            creator : email
        });

        return savedObj.key;
    }  
    

    serachInBd(id: string) {


       
        return this.db.object('/lists/' + id).valueChanges();

    }

   
    sendData(answers, email: string, id: string) {

        this.db.list('/lists/' + id + '/answers/').push({
            answers: answers,
            sender : email
        });
    
  }


}
