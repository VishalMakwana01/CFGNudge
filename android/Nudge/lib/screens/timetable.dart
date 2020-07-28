import "package:flutter/material.dart";
import "package:google_fonts/google_fonts.dart";
import "package:Nudge/data/globals.dart" as global;

class Box extends StatelessWidget {
  final title;
  Box(@required this.title);
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      appBar: AppBar(
        title: Text(title),
      ),
      body: Column(children: <Widget>[
        Container(
          child: Padding(
            padding: EdgeInsets.only(top: 50, bottom: 50, left: 50, right: 50),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(25),
              child: Card(
                elevation: 10,
                color: Colors.orange,
                child: Center(
                  child: Text(
                    title,
                    style: GoogleFonts.pacifico(
                      fontSize: 25,
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        ClipRRect(
          borderRadius: BorderRadius.circular(25),
          child: Card(
            elevation: 10,
            color: Colors.yellow,
            child: Center(
              child: Text(
                "Timing:${global.slot}",
                style: GoogleFonts.pacifico(
                  fontSize: 25,
                ),
              ),
            ),
          ),
        ),
        ClipRRect(
          borderRadius: BorderRadius.circular(25),
          child: Card(
            elevation: 10,
            color: Colors.yellow,
            child: Center(
              child: Text(
                "Score:${global.score}",
                style: GoogleFonts.pacifico(
                  fontSize: 25,
                ),
              ),
            ),
          ),
        ),

        ClipRRect(
          borderRadius: BorderRadius.circular(25),
          child: Card(
            elevation: 10,
            color: Colors.yellow,
            child: Center(
              child: Text(
                "Attendance:${global.attendance}",
                style: GoogleFonts.pacifico(
                  fontSize: 25,
                ),
              ),
            ),
          ),
        ),
      ]),
    );
  }
}
