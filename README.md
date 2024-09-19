This is a simple little web app that is meant to be in a container and accessed locally to deliver a little Chuck Norris style roundhouse of happiness to your day!

It could just as easily be adapted to call the joke api in a webpage. I'm trying to make it into a docker container because I'm also trying to learn docker!
It is mapped to port 5000 internally so make sure that is accessable.

<b>Usage</b>:<br>
```
$ docker pull cyberkaeh/chuck_app:latest
$ docker run -d --name chuck_jokes -p 5000:5000 cyberkaeh/chuck_app:latest
```

<hr>
<br>

This is my first docker containerized web app!! <br>
With that said I would greatly appreciate any tips, tricks, contributions, or advice! <br>

Connect with me on <a href="linkedin.com/in/anthony-allen-738074268">LinkedIn!</a>

![chuck1](https://github.com/user-attachments/assets/2613f3a5-0335-4cc0-99d9-a6ef3ec8630d) <br>

And remember; Chuck Norris never learned to code, he just stares down the computer untill it starts compiling his thoughts.
