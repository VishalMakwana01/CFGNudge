import 'package:Nudge/screens/job_details.dart';
import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:Nudge/data/list.dart";

//in case there are changes in backend
//rest the backend code is in jobs() file in screens folder
class Box1 extends StatelessWidget {
  final title;
  int i;
  Box1(@required this.title);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text("Job Opportunities"),),
      backgroundColor: Colors.black,
          body: SingleChildScrollView(
                      child: Column(children: <Widget>[
        Column(children: <Widget>[
            ClipRRect(
              child: Card(
                elevation: 10,
                child: Center(
                  child: GestureDetector(
                                      child: Image(
                      image: NetworkImage(
                        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                      ),
                      
                    ),onTap: (){
                     Navigator.of(context).pushReplacementNamed(DJ.routename);
                    },
                  ),
                ),
              ),
            ),
            Container(
              height: 70,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(25),
                child: Card(
                  elevation: 10,
                  color: Colors.yellow,
                  child: Center(
                    // child: Image(
                    //   image: NetworkImage(
                    //       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"),
                    // ),
                    child: Text(
                      "ABC",
                      style: GoogleFonts.pacifico(
                        fontSize: 30,
                      ),
                    ),
                  ),
                ),
              ),
            ),
            Text(
              title,
              style: GoogleFonts.pacifico(
                fontSize: 30,
              ),
            ),
            Padding(
              padding: EdgeInsets.all(5),
            )
        ]),
        Column(children: <Widget>[
            GestureDetector(
                          child: ClipRRect(
                child: Card(
                  elevation: 10,
                  child: Center(
                    child: Image(
                      image: NetworkImage(
                        "https://image.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15866.jpg"
                      ),
                    ),
                  ),
                ),
              ),
              onTap: (){
                Navigator.of(context).pushReplacementNamed(DJ.routename);
              },
            ),
            Container(
              height: 70,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(25),
                child: Card(
                  elevation: 10,
                  color: Colors.yellow,
                  child: Center(
                    // child: Image(
                    //   image: NetworkImage(
                    //       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"),
                    // ),
                    child: Text(
                     "JPMC",
                      style: GoogleFonts.pacifico(
                        fontSize: 30,
                      ),
                    ),
                  ),
                ),
              ),
            ),
            Text(
              title,
              style: GoogleFonts.pacifico(
                fontSize: 30,
              ),
            ),
            Padding(
              padding: EdgeInsets.all(5),
            )
        ]),
        Column(children: <Widget>[
            GestureDetector(
                          child: ClipRRect(
                child: Card(
                  elevation: 10,
                  child: Center(
                    child: Image(
                      image: NetworkImage(
                       "https://media.gettyimages.com/photos/group-portrait-of-business-people-in-conference-room-picture-idsb10067935a-006https://media.gettyimages.com/photos/group-portrait-of-business-people-in-conference-room-picture-idsb10067935a-006https://media.gettyimages.com/photos/group-portrait-of-business-people-in-conference-room-picture-idsb10067935a-006"
                      ),
                    ),
                  ),
                ),
              ),
              onTap: (){
                Navigator.of(context).pushReplacementNamed(DJ.routename);
              },
            ),
            Container(
              height: 70,
              child: ClipRRect(
                borderRadius: BorderRadius.circular(25),
                child: Card(
                  elevation: 10,
                  color: Colors.yellow,
                  child: Center(
                    // child: Image(
                    //   image: NetworkImage(
                    //       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"),
                    // ),
                    child: Text(
                     "XYZ",
                      style: GoogleFonts.pacifico(
                        fontSize: 30,
                      ),
                    ),
                  ),
                ),
              ),
            ),
            Text(
              title,
              style: GoogleFonts.pacifico(
                fontSize: 30,
              ),
            ),
            Padding(
              padding: EdgeInsets.all(5),
            )
        ]),
      ]),
          ),
    );
  }
}
