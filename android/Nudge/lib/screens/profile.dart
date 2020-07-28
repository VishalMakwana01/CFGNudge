import "package:flutter/material.dart";
import "package:Nudge/screens/homepage.dart";
import "package:Nudge/data/globals.dart" as global;
import "package:google_fonts/google_fonts.dart";

class UserProfilePage extends StatelessWidget {
  final String _fullName = global.name;
  final String _emailid = global.emailid;
  final String _bio = "PhoneNo:"+global.phonenumber;
  final String _startingscore = global.score;
  final String _attendance = global.attendance;
  // final String _scores = global.;

  Widget _buildCoverImage(Size screenSize) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Profile"),
      ),
      backgroundColor: Colors.black,
      body: Container(
        height: screenSize.height / 2.6,
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage('assets/img2.jpg'),
            fit: BoxFit.cover,
          ),
        ),
      ),
    );
  }

  Widget _buildProfileImage() {
    return Center(
      child: Container(
        width: 140.0,
        height: 140.0,
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage('assets/img1.png'),
            fit: BoxFit.cover,
          ),
          borderRadius: BorderRadius.circular(80.0),
          border: Border.all(
            color: Colors.white,
            width: 10.0,
          ),
        ),
      ),
    );
  }

  Widget _buildFullName() {
    TextStyle _nameTextStyle = TextStyle(
      fontFamily: 'Roboto',
      color: Colors.white,
      fontSize: 28.0,
      fontWeight: FontWeight.w700,
    );

    return Text(
      _fullName,
      style: _nameTextStyle,
    );
  }

  Widget _buildStatus(BuildContext context) {
    return Text(
      _emailid,
      style: GoogleFonts.comicNeue(fontSize: 30, color: Colors.white),
    );
  }

  Widget _buildStatItem(String label, String count) {
    TextStyle _statLabelTextStyle = TextStyle(
      fontFamily: 'Roboto',
      color: Colors.black,
      fontSize: 16.0,
      fontWeight: FontWeight.bold,
    );

    TextStyle _statCountTextStyle = TextStyle(
      color: Colors.black54,
      fontSize: 24.0,
      fontWeight: FontWeight.bold,
    );

    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        Text(
          count,
          style: _statCountTextStyle,
        ),
        Text(
          label,
          style: _statLabelTextStyle,
        ),
      ],
    );
  }

  Widget _buildStatContainer() {
    return Container(
      height: 60.0,
      margin: EdgeInsets.only(top: 8.0),
      decoration: BoxDecoration(
        color: Color(0xFAEFF1A7),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: <Widget>[
          _buildStatItem("Score", _startingscore),
          _buildStatItem("Attendance", _attendance),
          // _buildStatItem("Scores", _scores),
        ],
      ),
    );
  }

  Widget _buildBio(BuildContext context) {
    TextStyle bioTextStyle = TextStyle(
      fontFamily: 'Spectral',
      fontWeight: FontWeight.bold, //try changing weight to w500 if not thin
      fontStyle: FontStyle.italic,
      color: Colors.black,
      fontSize: 16.0,
    );

    return Container(
      color: Theme.of(context).scaffoldBackgroundColor,
      padding: EdgeInsets.all(8.0),
      child: Text(
        _bio,
        textAlign: TextAlign.center,
        style: bioTextStyle,
      ),
    );
  }

  Widget _buildSeparator(Size screenSize) {
    return Container(
      width: screenSize.width / 1.6,
      height: 2.0,
      color: Colors.white54,
      margin: EdgeInsets.only(top: 4.0),
    );
  }

  @override
  Widget build(BuildContext context) {
    Size screenSize = MediaQuery.of(context).size;
    return Stack(
      children: <Widget>[
        _buildCoverImage(screenSize),
        SafeArea(
          child: SingleChildScrollView(
            child: Column(
              children: <Widget>[
                SizedBox(height: screenSize.height / 6.4),
                _buildProfileImage(),
                Padding(
                  padding: EdgeInsets.all(10),
                ),
                _buildFullName(),
                Padding(
                  padding: EdgeInsets.all(15),
                ),
                _buildStatus(context),
                Padding(
                  padding: EdgeInsets.all(10),
                ),
                _buildStatContainer(),
                Padding(
                  padding: EdgeInsets.all(20),
                ),

                _buildBio(context),
                Padding(
                  padding: EdgeInsets.all(5),
                ),
                _buildSeparator(screenSize),
                SizedBox(height: 10.0),
                
                SizedBox(height: 8.0),
                FlatButton(
                  color: Colors.blue[100],
                  child: Text(
                    "Back to DashBoard",
                    style: TextStyle(fontSize: 15),
                  ),
                  onPressed: () {
                    Navigator.of(context).popAndPushNamed(HomePage.routename);
                  },
                )
                
              ],
            ),
          ),
        ),
      ],
      // ),
    );
  }
}
