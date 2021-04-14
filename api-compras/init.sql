
create table carrinho(
	codigo serial primary key,
	cod_user integer NOT NULL,
	statuscarrinho varchar(20) NOT NULL
); 

create table produtoCarrinho(
	codigo serial primary key,
	cod_carrinho integer NOT NULL,
	cod_product varchar(100) not null,
	FOREIGN KEY (cod_carrinho) REFERENCES carrinho (codigo)
);

insert into carrinho (cod_user,statuscarrinho) values (1,'open');
insert into carrinho (cod_user,statuscarrinho) values (2,'closed');

insert into produtocarrinho (cod_carrinho,cod_product) values (1,'60743d83b857edac48b960f4');
insert into produtocarrinho (cod_carrinho,cod_product) values (1,'aaa');
insert into produtocarrinho (cod_carrinho,cod_product) values (2,'bbb');