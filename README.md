This is a simple little web app that is meant to be in a container and accessed locally to deliver a little Chuck Norris style roundhouse of happiness to your day!

It could just as easily be adapted to call the joke api in a webpage; but I wanted to learn about GitHub workflows and Docker repositories. <br>
It is mapped to port 5000 internally so make sure that is accessable.

<b>Usage</b>:<br>
```
$ docker pull cyberkaeh/chuck_app:latest
$ docker run -d --name chuck_jokes -p 5000:5000 cyberkaeh/chuck_app:latest
```

After running the container you should have access on local:5000. You should be able to follow the link provied in the terminal depending on how you pulled and ran the image.
If not then open a web browser and enter the IP address of the host running the docker container followed by the port. It should be something similiar to one of the following examples.

```
localhost:5000
192.168.1.*:5000
```

<hr>
<br>

This is my first docker containerized web app!! <br>
With that said I would greatly appreciate any tips, tricks, contributions, or advice! <br>

Connect with me on <a href="linkedin.com/in/anthony-allen-738074268">LinkedIn!</a>

![chuck1](https://github.com/user-attachments/assets/2613f3a5-0335-4cc0-99d9-a6ef3ec8630d) <br>

And remember; Chuck Norris never learned to code, he just stares down the computer untill it starts compiling his thoughts.
