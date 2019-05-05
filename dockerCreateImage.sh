VERSION_MINOR=$(bash $PWD/genSeq.sh GPASSO)
sudo docker build --tag durai145/website.$VERSION_MINOR .
sudo docker images
