import 'package:flutter/material.dart';
import 'dart:math';

void main() => runApp(
      MaterialApp(
        home: BallPage(),
      ),
    );

class BallPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.blue[900],
        title: Text('Ask Me Anything'),
      ),
      body: Ball(),
    );
  }
}

class Ball extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return new _BallState();
  }
}

class _BallState extends State {
  int answerIndex = 1;
  @override
  Widget build(BuildContext context) {
    return Container(
      color: Colors.blue,
      child: Column(
        children: <Widget>[
          Expanded(
            child: FlatButton(
              child: Image.asset('images/ball$answerIndex.png'),
              onPressed: () {
                setState(() {
                  answerIndex = Random().nextInt(5) + 1;
                  print(answerIndex);
                });
              },
            ),
          )
        ],
      ),
    );
  }
}
