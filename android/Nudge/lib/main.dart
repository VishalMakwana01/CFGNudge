import 'package:Nudge/screens/authscreen.dart';
import 'package:flutter/material.dart';
import "screens/homepage.dart";
import 'package:firebase_auth/firebase_auth.dart';
import 'package:google_sign_in/google_sign_in.dart';
import "screens/job_details.dart";


void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        
        primarySwatch: Colors.blue,
       
        // visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: AuthScreen(),
      routes: {
        HomePage.routename:(ctx)=>HomePage(),
        DJ.routename:(ctx)=>DJ(),
        
      },
    );
  }
}

// class LoginPageWidget extends StatefulWidget {
//   @override
//   LoginPageWidgetState createState() => LoginPageWidgetState();
// }

// class LoginPageWidgetState extends State<LoginPageWidget> {
//   final GoogleSignIn _googleSignIn = GoogleSignIn();
//   final FirebaseAuth _auth = FirebaseAuth.instance;
//   bool isUserSignedIn = false;
//   String username = "";
//   String picurl = "";

//   @override
//   void initState() {
//     super.initState();

//     checkIfUserIsSignedIn();
//   }

//   void checkIfUserIsSignedIn() async {
//     var userSignedIn = await _googleSignIn.isSignedIn();

//     setState(() async {
//       isUserSignedIn = userSignedIn;
//       if (isUserSignedIn == true) {
//         FirebaseUser user = await FirebaseAuth.instance.currentUser();
//         username = user.displayName;
//         picurl = user.photoUrl;
//       }
//     });
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Center(
//       child: Scaffold(
//         body: Container(
//           padding: EdgeInsets.all(50),
//           child: Align(
//             alignment: Alignment.center,
//             child: Center(
//               child: Column(children: <Widget>[
//                 if (isUserSignedIn)
//                   Container(
//                     width: 200,
//                     height: 200,
//                     decoration: BoxDecoration(
//                       shape: BoxShape.circle,
//                       image: DecorationImage(
//                           image: NetworkImage(picurl), fit: BoxFit.fill),
//                     ),
//                   ),
//                 Padding(
//                   padding: EdgeInsets.only(
//                     bottom: 50,
//                   ),
//                 ),
//                 Center(
//                   child: FlatButton(
//                     shape: RoundedRectangleBorder(
//                       borderRadius: BorderRadius.circular(20),
//                     ),
//                     onPressed: () {
//                       onGoogleSignIn(context);
//                     },
//                     color: isUserSignedIn ? Colors.green : Colors.blueAccent,
//                     child: Padding(
//                       padding: EdgeInsets.all(10),
//                       child: Row(
//                         mainAxisAlignment: MainAxisAlignment.center,
//                         crossAxisAlignment: CrossAxisAlignment.center,
//                         children: <Widget>[
//                           Icon(Icons.account_circle, color: Colors.white, ),
//                           SizedBox(width: 10),
//                           Text(
//                             isUserSignedIn
//                                 ? 'Welcome $username'
//                                 : 'Login with Google',
//                             style: TextStyle(color: Colors.white),
//                           ),
//                         ],
//                       ),
//                     ),
//                   ),
//                 ),
//                 if (isUserSignedIn)
//                   Column(children: <Widget>[
//                     Padding(
//                       padding: EdgeInsets.all(20),
//                     ),
//                     FlatButton(
//                       shape: RoundedRectangleBorder(
//                         borderRadius: BorderRadius.circular(20),
//                       ),
//                       // onPressed: (){Navigator.of(context).pushReplacementNamed(HomePage.routename);},
//                       color: Colors.red,
//                       textColor: Colors.white,
//                       child: Padding(
//                         padding: EdgeInsets.all(10),
//                         child: Text("SignOut"),
//                       ),
//                       onLongPress: () async {
//                         await FirebaseAuth.instance.signOut();
                        
//                       },
//                     ),
//                   ])
//               ]),
//             ),
//           ),
//         ),
//       ),
//     );
//   }

//   Future<FirebaseUser> _handleSignIn() async {
//     FirebaseUser user;
//     bool userSignedIn = await _googleSignIn.isSignedIn();

//     setState(() {
//       isUserSignedIn = userSignedIn;
//     });

//     if (isUserSignedIn) {
//       user = await _auth.currentUser();
//     } else {
//       final GoogleSignInAccount googleUser = await _googleSignIn.signIn();
//       final GoogleSignInAuthentication googleAuth =
//           await googleUser.authentication;

//       final AuthCredential credential = GoogleAuthProvider.getCredential(
//         accessToken: googleAuth.accessToken,
//         idToken: googleAuth.idToken,
//       );

//       user = (await _auth.signInWithCredential(credential)).user;
//       userSignedIn = await _googleSignIn.isSignedIn();
//       setState(() {
//         isUserSignedIn = userSignedIn;
//       });
//     }

//     return user;
//   }

//   void onGoogleSignIn(BuildContext context) async {
//     FirebaseUser user = await _handleSignIn();
//     var user1 = await FirebaseAuth.instance.currentUser();
//     String uid = user1.uid;
//     var userSignedIn = await Navigator.push(
//       context,
//       MaterialPageRoute(builder: (context) {
//         return WelcomeUserWidget(user, _googleSignIn, uid);
//       }),
//     );

//     setState(() {
//       isUserSignedIn = userSignedIn == null ? true : false;
//     });
//   }
// }

// class WelcomeUserWidget extends StatelessWidget {
//   GoogleSignIn _googleSignIn;
//   FirebaseUser _user;
//   String _uid;

//   WelcomeUserWidget(FirebaseUser user, GoogleSignIn signIn, String uid) {
//     _user = user;
//     _googleSignIn = signIn;
//     _uid = uid;
//   }

//   @override
//   Widget build(BuildContext context) {
//     return HS(_uid);
//     // return HomePage(_uid);
//     // return Scaffold(
//     //   appBar: AppBar(
//     //     backgroundColor: Colors.white,
//     //     iconTheme: IconThemeData(color: Colors.black),
//     //     elevation: 0,
//     //   ),
//     //   body: Container(
//     //     color: Colors.white,
//     //     padding: EdgeInsets.all(50),
//     //     child: Align(
//     //       alignment: Alignment.center,
//     //       child: Column(
//     //         mainAxisAlignment: MainAxisAlignment.center,
//     //         children: <Widget>[
//     //           ClipOval(
//     //             child: Image.network(
//     //               _user.photoUrl,
//     //               width: 100,
//     //               height: 100,
//     //               fit: BoxFit.cover
//     //             )
//     //           ),
//     //           SizedBox(height: 20),
//     //           Text('Welcome,', textAlign: TextAlign.center),
//     //           Text(_user.displayName, textAlign: TextAlign.center,
//     //             style: TextStyle(fontWeight: FontWeight.bold, fontSize: 25)),
//     //           SizedBox(height: 20),
//     //           FlatButton(
//     //             shape: RoundedRectangleBorder(
//     //               borderRadius: BorderRadius.circular(20),
//     //             ),
//     //             onPressed: () {
//     //               _googleSignIn.signOut();
//     //               Navigator.pop(context, false);
//     //             },
//     //             color: Colors.redAccent,
//     //             child: Padding(
//     //               padding: EdgeInsets.all(10),
//     //               child: Row(
//     //                 mainAxisAlignment: MainAxisAlignment.center,
//     //                 crossAxisAlignment: CrossAxisAlignment.center,
//     //                 children: <Widget>[
//     //                   Icon(Icons.exit_to_app, color: Colors.white),
//     //                   SizedBox(width: 10),
//     //                   Text('Log out of Google', style: TextStyle(color: Colors.white))
//     //                 ],
//     //               )
//     //             )
//     //           )
//     //         ],
//     //       )
//     //     )
//     //   )
//     // );
//   }
// }


