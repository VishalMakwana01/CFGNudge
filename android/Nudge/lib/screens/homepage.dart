import "package:flutter/material.dart";
import "package:carousel_slider/carousel_slider.dart";
import "package:google_fonts/google_fonts.dart";
import "package:Nudge/data/list.dart";
import "package:Nudge/screens/imagescreen.dart";
import "package:Nudge/data/list.dart";
import "package:Nudge/data/globals.dart" as global;
import "package:cloud_firestore/cloud_firestore.dart";

class HomePage extends StatefulWidget {
  // String emailid;
  // HomePage(this.emailid);
  static const routename = "/homepage";
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  void getData1() async {
    final databaseReference = await Firestore.instance;
    databaseReference
        .collection("students")
        .getDocuments()
        .then((QuerySnapshot snapshot) {
      snapshot.documents.forEach((f) {
        //  print('${f.data}}');
        print(global.emailid);
        if (f.data["email"] == global.emailid) {
          // print('${f.data["email"]}}');
          // print('${f.data}}');
          global.name=f.data['name'];
          global.dob=f.data["dob"];
          global.attendance=f.data["student_attendance"].toString();
          global.phonenumber=f.data["phoneNo"];
          global.id=f.data["student_assigned_slot"].toString();
          global.slot=global.ab[global.id];
          global.score=f.data["starting_score"].toString();
          print(f.data["name"]);
          print("done\n\n\n\n\n\n\n");
        }
        // else print("nope");
        else{
          SnackBar(content: Text("Wrong Credentials"),);
        }
      });
    });
//   databaseReference
//     .collection("teachers")
//     .where("address.country", isEqualTo: "USA")
//     .getDocuments()
//     .then((value) {
//   value.documents.forEach((result) {
//     print(result.data);
//   });
// });
// }
  }

  @override
  Widget build(BuildContext context) {
    // final User user = ModalRoute.of(context).settings.arguments;

    return Scaffold(
        backgroundColor: Colors.black87,
        appBar: AppBar(
          title: Text("Nudge"),
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[
              CarouselSlider(
                height: MediaQuery.of(context).size.height * 0.85,
                items: SList.list.map((link) {
                  return Builder(builder: (BuildContext context) {
                    return Container(
                        width: MediaQuery.of(context).size.width,
                        margin: EdgeInsets.symmetric(horizontal: 5.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            ClipRRect(
                              borderRadius: BorderRadius.circular(20),
                              child: GestureDetector(
                                child: Image.network(link, fit: BoxFit.cover),
                                onTap: () async{
                                 await getData1();
                                  print(global.emailid);
                                  Navigator.push<Widget>(
                                    context,
                                    MaterialPageRoute(
                                      builder: (context) => ImageScreen(link),
                                    ),
                                  );
                                },
                              ),
                            ),
                            Expanded(
                              child: Padding(
                                  padding: EdgeInsets.symmetric(
                                    vertical: 10,
                                    horizontal: 20,
                                  ),
                                  child: GestureDetector(
                                      child: Text(
                                        SList.listtitle[link],
                                        style: GoogleFonts.pacifico(
                                          fontSize: 40,
                                          color: Colors.white,
                                        ),
                                      ),
                                      onTap: () {
                                        Navigator.push<Widget>(
                                          context,
                                          MaterialPageRoute(
                                            builder: (context) =>
                                                ImageScreen(link),
                                          ),
                                        );
                                      })),
                            )
                          ],
                        )
                        // child: Card(
                        //     elevation: 10,
                        // child: Stack(
                        //   children: <Widget>[

                        // child: ClipRRect(
                        //   borderRadius: BorderRadius.circular(20),
                        //   child: Image.network(link, fit: BoxFit.cover),
                        // )

                        //  ],),

                        //   ],
                        // ),
                        // ),
                        );
                  });
                }).toList(),
                enableInfiniteScroll: true,
                autoPlay: true,
                initialPage: 0,
                scrollDirection: Axis.horizontal,
                pauseAutoPlayOnTouch: Duration(seconds: 5),
                viewportFraction: 0.8,
                enlargeCenterPage: true,
                aspectRatio: 16 / 9,
              )
            ],
          ),
        ));
  }
}

// class User {
//   final String userName;
//   final String password;

//   User(this.userName, this.password);
// }


// com.example.Nudge
