import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import './icon_content.dart';
import './resuable_card.dart';

const bottomContainerHeight = 80.0;
const activeCartColor = Color(0xff1d1e33);
const inactiveCartColor = Color(0xff111328);
const bottomContainerColor = Color(0xffeb1555);

class InputPage extends StatefulWidget {
  @override
  _InputPageState createState() => _InputPageState();
}

class _InputPageState extends State<InputPage> {
  Color maleCardColour = inactiveCartColor;
  Color femaleCardColour = inactiveCartColor;
  int gender;

  void updateColour(int gender) {
    gender = gender;
    if (gender == 1) {
      maleCardColour = activeCartColor;
      femaleCardColour = inactiveCartColor;
    } else {
      femaleCardColour = activeCartColor;
      maleCardColour = inactiveCartColor;
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('BMI CALCULATOR'),
      ),
      body: Column(
        children: <Widget>[
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: GestureDetector(
                    onTap: () {
                      setState(() {
                        updateColour(1);
                      });
                    },
                    child: ReusableCard(
                      colour: maleCardColour,
                      cardChild: IconContent(
                        icon: FontAwesomeIcons.mars,
                        label: 'MALE',
                      ),
                    ),
                  ),
                ),
                Expanded(
                  child: GestureDetector(
                    onTap: () {
                      setState(() {
                        updateColour(2);
                      });
                    },
                    child: ReusableCard(
                      colour: femaleCardColour,
                      cardChild: IconContent(
                        icon: FontAwesomeIcons.venus,
                        label: 'FEMALE',
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: ReusableCard(colour: activeCartColor),
          ),
          Expanded(
            child: Row(
              children: <Widget>[
                Expanded(
                  child: ReusableCard(
                    colour: activeCartColor,
                  ),
                ),
                Expanded(
                  child: ReusableCard(
                    colour: activeCartColor,
                  ),
                ),
              ],
            ),
          ),
          Container(
            margin: EdgeInsets.only(top: 10.0),
            color: bottomContainerColor,
            width: double.infinity,
            height: bottomContainerHeight,
          )
        ],
      ),
    );
  }
}
