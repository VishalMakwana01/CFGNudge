// import 'dart:html';

import 'package:Nudge/data/list.dart';
import 'package:Nudge/widgets/box.dart';
import 'package:cloud_firestore/cloud_firestore.dart';

import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:firebase_auth/firebase_auth.dart";

class Jobs extends StatefulWidget {
  // final String uid;
  // HomePage(this.uid);
  @override
  _JobsState createState() => _JobsState();
}

class _JobsState extends State<Jobs> {
  
  @override
  Widget build(BuildContext context) {
    
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "Job Opportunities",
          // style: GoogleFonts.comicNeue(fontSize: 20),
        ),
        // backgroundColor: Colors.black,
      ),
      // body: StreamBuilder<QuerySnapshot> (
              
        backgroundColor: Colors.black,
      
      
      body: Center(
        child: Container(
            padding: const EdgeInsets.all(20.0),
            child: StreamBuilder<QuerySnapshot>(
              stream: Firestore.instance
                  .collection("jobs")
                  .snapshots(),
              builder: (BuildContext context,
                  AsyncSnapshot<QuerySnapshot> snapshot) {
                if (snapshot.hasError)
                  return new Text('Error: ${snapshot.error}');
                switch (snapshot.connectionState) {
                  case ConnectionState.waiting:
                    return new Text('Loading...');
                  default:
                    return new ListView(
                      children: snapshot.data.documents
                          .map((DocumentSnapshot document) {
                        return new Box1(
                         document['company'],
                          // description: document['description'],
                        );
                      }).toList(),
                    );
                }
              },
            )),
      ),

      // floatingActionButton: FloatingActionButton(
      //   child: Icon(Icons.add_box),
      //   onPressed: () {
      //     Navigator.of(context).pushNamed(TextForm.routename);
      //   },
      // ),
    );
  }
}

