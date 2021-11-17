docker build --no-cache -f SQL\Dockerfile.PostgreSql -t vodokanal/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t vodokanal/app ../..
