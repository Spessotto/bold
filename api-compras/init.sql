
create table carrinho(
	id serial primary key,
	userId integer NOT NULL,
	statusCarrinho varchar(20) NOT NULL
); 

create table produtoCarrinho(
	id serial primary key,
	carrinhoid integer NOT NULL,
	productId varchar(100) not null,
	FOREIGN KEY (carrinhoid) REFERENCES carrinho (id)
);

