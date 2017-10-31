# docker官方文档

## docker版本的相关信息

[https://blog.docker.com/2017/03/docker-enterprise-edition/](https://blog.docker.com/2017/03/docker-enterprise-edition/)
[http://itmuch.com/docker/docker-1/](http://itmuch.com/docker/docker-1/)

docker从17.03版本之后，分为CE(Community Edition)和EE(Enterprise Edition)

docker-for-mac: v17.09 current
[https://docs.docker.com/docker-for-mac/](https://docs.docker.com/docker-for-mac/)

docker的版本：
`docker --version`
`docker -v`

Error response from daemon: Get https://index.docker.io/v1/search?q=node&n=25: dial tcp 0.0.0.55:443: connect: invalid argument

首先是用docker搜索镜像：
`docker search centos`，凡是查询出来的结果，前面带用户名的，都是第三方的

`Error response from daemon: Get https://index.docker.io/v1/search?q=node&n=25: dial tcp 0.0.0.55:443: connect: invalid argument`

如果出现了这种错误，可能是因为你进行了网络代理。

docker拉取镜像：
`docker pull centos`，拉取官方的centos镜像

查看本地的所有镜像：docker images
删除镜像：docker rmi + IMAGEID

启动容器：
输出Hello World

docker run centos /bin/echo 'Hello World'
docker运行centos这个镜像，在这个镜像中输出'Hello World'

docker ps -a: 目前可以看到运行的以及停止运行的容器，每个都有一个容器ID：CONTAINER ID
启动docker容器，如果你不指定名字，会自动给一个名字，内部有一个名字库：
optimistic_pare

给docker起一个名字，再来运行一下：
docker run --name my-first-docker -it centos /bin/bash
--name 给docker起一个名称
-it是两个参数的缩写
-i 是让输入终端保持打开状态，我要直接进入输入内容，-t是让它开一个伪终端tty，绑定到标准输入上，然后后面是要运行的命令：

这样就进入到了docker容器里面

ps aux 查看进程：
[root@68a1f36e1184 /]# ps aux
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.1  0.1  11784  3096 pts/0    Ss   08:13   0:00 /bin/bash
root        15  0.0  0.1  47456  3448 pts/0    R+   08:14   0:00 ps aux

可以看到只有两个进程，一个是启动的bash终端，一个是ps aux进程

执行docker run的时候，它会检查当前有没有centos镜像，如果没有，就会自动帮你pull下来，然后就使用centos启动了一个容器，启动完成后，会给它分配一个文件系统，把文件系统放在镜像的上面一层，让它可写，在容器的可写层，也可以分配ip地址，然后运行一个你指定的命令，如果这个命令运行退出，那你的docker容器也就退出了

exit退出docker

docker start 启动一个docker容器：
docker start IMAGEID

docker run -d --name mydocker1 centos
-d是指在后台运行

docker rm 容器ID，如果是正在运行的容器，是删除不了的，必须停止或者加-f参数来删除。

docker stop 容器ID

docker ps -l：可以看到最后一次运行的那个容器，就不用看那么多了

docker attach containerID：如果卡住了，可能是因为你要进入的这个容器，已经退出了
那可以用另外一个命令进入：
nsenter，它是一个可以访问另一个进程名字空间，namespace
centos应该是默认有这个命令的，如果没有，就装一下，在util-linux软件包中。
我们就可以通过容器的PID，进入到这个容器里面去

docker inspect --format "{{.State.Pid}}" mycentos[这个地方也可以是containerID或者容器的名称]

nsenter --target 上面返回的PID --mount --uts --ipc --net --pid
