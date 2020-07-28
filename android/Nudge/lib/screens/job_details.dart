
import 'dart:ffi';

import "package:flutter/material.dart";
class DJ extends StatelessWidget {
  static const routename="/jd";
  final company="ABC";
  final skill1="java";
  final skill2="c++";
  // DJ(this.company,this.skill1,this.skill2);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
              child: Column(
          children: <Widget>[
           ClipRRect(
                        child:Image(image: NetworkImage(
                          "https://media.gettyimages.com/photos/group-portrait-of-business-people-in-conference-room-picture-idsb10067935a-006https://media.gettyimages.com/photos/group-portrait-of-business-people-in-conference-room-picture-idsb10067935a-006https://media.gettyimages.com/photos/group-portrait-of-business-people-in-conference-room-picture-idsb10067935a-006",
                        ),),
           ),
            Container(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.topCenter,
                  end: Alignment.bottomCenter,
                  colors: [Colors.redAccent, Colors.pinkAccent]
                )
              ),
              child: Container(
                width: double.infinity,
                height: 200.0,
                child: Center(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: <Widget>[
                      
                      
                      Text(
                        company,
                        style: TextStyle(
                          fontSize: 22.0,
                          color: Colors.white,
                        ),
                      ),
                      SizedBox(
                        height: 10.0,
                      ),
                      Card(
                        margin: EdgeInsets.symmetric(horizontal: 20.0,vertical: 5.0),
                        clipBehavior: Clip.antiAlias,
                        color: Colors.white,
                        elevation: 5.0,
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 8.0,vertical: 22.0),
                          child: Row(
                            children: <Widget>[
                              Expanded(
                                child: Column(

                                  children: <Widget>[
                                    Text(
                                      "Skills Required",
                                      style: TextStyle(
                                        color: Colors.redAccent,
                                        fontSize: 22.0,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                    SizedBox(
                                      height: 5.0,
                                    ),
                                    
                                  ],
                                ),
                              ),
                              Expanded(
                                child: Column(

                                  children: <Widget>[
                                    Text(
                                      skill2,
                                      style: TextStyle(
                                        color: Colors.redAccent,
                                        fontSize: 22.0,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                    SizedBox(
                                      height: 5.0,
                                    ),
                                    
                                  ],
                                ),
                              ),
                              Expanded(
                                child: Column(

                                  children: <Widget>[
                                    Text(
                                      "Java",
                                      style: TextStyle(
                                        color: Colors.redAccent,
                                        fontSize: 22.0,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                    SizedBox(
                                      height: 5.0,
                                    ),
                                    // 
                                  ],
                                ),
                              ),
                            ],
                          ),
                        ),
                      )
                    ],
                  ),
                ),
              )
            ),
            Container(
              child: Padding(
                padding: const EdgeInsets.symmetric(vertical: 30.0,horizontal: 16.0),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: <Widget>[
                    Text(
                        "Who we are",
                      style: TextStyle(
                        color: Colors.redAccent,
                        fontStyle: FontStyle.normal,
                        fontSize: 28.0
                      ),
                    ),
                    SizedBox(
                      height: 10.0,
                    ),
                    Text('Since its establishment in 1977, A&D has contributed to the development of industry and society through "weighing and measurement." Today, our weighing and measurement instruments are widely used in various industries and in homes..\n'
                        'In our current environment, we are surrounded with issues that are often overwhelming and that cause dramatic changes, such as economic stagnation, energy concerns, terrorism, low birth rates, aging populations, and other health issues. We believe that these challenges require companies to operate in such a way that they can respond to these issues without causing more harm than benefit.',
                      style: TextStyle(
                        fontSize: 22.0,
                        fontStyle: FontStyle.italic,
                        fontWeight: FontWeight.w300,
                        color: Colors.black,
                        letterSpacing: 2.0,
                      ),
                    ),
                  ],
                ),
              ),
            ),
            SizedBox(
              height: 20.0,
            ),
            Container(
              width: 300.00,

              child: RaisedButton(
                onPressed: (){
                  Navigator.of(context).pop();
                },
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(80.0)
                ),
                elevation: 0.0,
                  padding: EdgeInsets.all(0.0),
                child: Ink(
                  decoration: BoxDecoration(
                    gradient: LinearGradient(
                      begin: Alignment.centerRight,
                      end: Alignment.centerLeft,
                      colors: [Colors.redAccent,Colors.pinkAccent]
                    ),
                    borderRadius: BorderRadius.circular(30.0),
                  ),
                  child: Container(
                    constraints: BoxConstraints(maxWidth: 300.0, minHeight: 50.0),
                    alignment: Alignment.center,
                    child: Text("Role Offered:Developer",
                    style: TextStyle(color: Colors.white, fontSize: 26.0, fontWeight:FontWeight.w300),
                    ),
                  ),
                )
              ),
            ),
            Padding(padding: EdgeInsets.all(20),),
            FloatingActionButton(child: Icon(Icons.arrow_back),onPressed: (){Navigator.of(context).pop();},)
          ],
        ),
      ),
    );
  }
}
