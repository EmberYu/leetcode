import 'package:flutter/material.dart';
import './input_page.dart';

void main() => runApp(BMICalculator());

class BMICalculator extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        iconTheme: IconThemeData(color: Colors.white),
        primaryColor: Color(0xff0a0e21),
        scaffoldBackgroundColor: Color(0xff0a0e21),
        textTheme: TextTheme(bodyText2: TextStyle(color: Colors.white)),
      ),
      home: InputPage(),
    );
  }
}
