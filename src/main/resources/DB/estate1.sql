PGDMP     /    4    
            y            estate    12.3    12.3 �    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16454    estate    DATABASE     �   CREATE DATABASE estate WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'English_United States.1252' LC_CTYPE = 'English_United States.1252';
    DROP DATABASE estate;
                postgres    false            �            1259    32838    add_to_cart    TABLE       CREATE TABLE public.add_to_cart (
    id bigint NOT NULL,
    added_at character varying(255),
    price double precision,
    qty integer,
    status character varying(255),
    user_id bigint,
    product_id bigint,
    added_date character varying(255)
);
    DROP TABLE public.add_to_cart;
       public         heap    postgres    false            �            1259    24672    areas    TABLE     �   CREATE TABLE public.areas (
    id bigint NOT NULL,
    image character varying(255),
    product_id bigint,
    status integer,
    title character varying(255)
);
    DROP TABLE public.areas;
       public         heap    postgres    false            �            1259    24670    areas_id_seq    SEQUENCE     u   CREATE SEQUENCE public.areas_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.areas_id_seq;
       public          postgres    false    217            �           0    0    areas_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.areas_id_seq OWNED BY public.areas.id;
          public          postgres    false    216            �            1259    57450    blogs    TABLE     i  CREATE TABLE public.blogs (
    id bigint NOT NULL,
    address character varying(255),
    area character varying(255),
    category_id bigint,
    created_at timestamp without time zone,
    customer character varying(255),
    description character varying(255),
    image character varying(255),
    metadesc character varying(255),
    metakey character varying(255),
    phone character varying(255),
    "position" character varying(255),
    price double precision,
    product_id character varying(255),
    slug character varying(255),
    status character varying(255),
    title character varying(255)
);
    DROP TABLE public.blogs;
       public         heap    postgres    false            �            1259    57448    blogs_id_seq    SEQUENCE     u   CREATE SEQUENCE public.blogs_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.blogs_id_seq;
       public          postgres    false    232            �           0    0    blogs_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.blogs_id_seq OWNED BY public.blogs.id;
          public          postgres    false    231            �            1259    32926    carts    TABLE     �   CREATE TABLE public.carts (
    id bigint NOT NULL,
    added_date character varying(255),
    price double precision NOT NULL,
    qty integer NOT NULL,
    user_id bigint,
    product_id bigint
);
    DROP TABLE public.carts;
       public         heap    postgres    false            �            1259    32924    carts_id_seq    SEQUENCE     u   CREATE SEQUENCE public.carts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.carts_id_seq;
       public          postgres    false    228            �           0    0    carts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.carts_id_seq OWNED BY public.carts.id;
          public          postgres    false    227            �            1259    16538 	   categorys    TABLE     �  CREATE TABLE public.categorys (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    slug character varying(255) NOT NULL,
    orders integer,
    metakey character varying(255),
    metadesc character varying(255),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    maincontainer boolean DEFAULT false NOT NULL,
    dealcontainer boolean DEFAULT false NOT NULL,
    container1 boolean DEFAULT false NOT NULL,
    container2 boolean DEFAULT false NOT NULL,
    requestcontainer boolean DEFAULT false NOT NULL,
    itemcontainer boolean DEFAULT false NOT NULL,
    servicecontainer boolean DEFAULT false NOT NULL,
    regioncontainer boolean DEFAULT false NOT NULL,
    status character varying(200) NOT NULL
);
    DROP TABLE public.categorys;
       public         heap    postgres    false            �            1259    16536    categorys_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categorys_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.categorys_id_seq;
       public          postgres    false    205            �           0    0    categorys_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.categorys_id_seq OWNED BY public.categorys.id;
          public          postgres    false    204            �            1259    32848    checkout_cart    TABLE     [  CREATE TABLE public.checkout_cart (
    id bigint NOT NULL,
    delivery_address character varying(255),
    order_date character varying(255),
    order_id character varying(255),
    payment_type character varying(255),
    price double precision,
    product_id bigint,
    qty integer,
    status character varying(255),
    user_id bigint
);
 !   DROP TABLE public.checkout_cart;
       public         heap    postgres    false            �            1259    32846    checkout_cart_id_seq    SEQUENCE     }   CREATE SEQUENCE public.checkout_cart_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.checkout_cart_id_seq;
       public          postgres    false    221            �           0    0    checkout_cart_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.checkout_cart_id_seq OWNED BY public.checkout_cart.id;
          public          postgres    false    220            �            1259    16582    contacts    TABLE     �  CREATE TABLE public.contacts (
    id integer NOT NULL,
    fullname character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    title character varying(255) NOT NULL,
    phone character varying(255) NOT NULL,
    detail character varying(255) NOT NULL,
    image character varying(255),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    status integer NOT NULL
);
    DROP TABLE public.contacts;
       public         heap    postgres    false            �            1259    16580    contacts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.contacts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.contacts_id_seq;
       public          postgres    false    209            �           0    0    contacts_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.contacts_id_seq OWNED BY public.contacts.id;
          public          postgres    false    208            �            1259    24653    emails    TABLE     m   CREATE TABLE public.emails (
    id bigint NOT NULL,
    email character varying(255),
    status integer
);
    DROP TABLE public.emails;
       public         heap    postgres    false            �            1259    24651    emails_id_seq    SEQUENCE     v   CREATE SEQUENCE public.emails_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.emails_id_seq;
       public          postgres    false    213            �           0    0    emails_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.emails_id_seq OWNED BY public.emails.id;
          public          postgres    false    212            �            1259    24686    hibernate_sequence    SEQUENCE     {   CREATE SEQUENCE public.hibernate_sequence
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.hibernate_sequence;
       public          postgres    false            �            1259    65653    pages    TABLE       CREATE TABLE public.pages (
    id bigint NOT NULL,
    category_id bigint,
    created_at timestamp without time zone,
    description character varying(255),
    image character varying(255),
    slug character varying(255),
    status character varying(255),
    title character varying(255),
    image1 character varying(225),
    image2 character varying(225),
    image3 character varying(225),
    description1 character varying(225),
    description2 character varying(225),
    description3 character varying(225)
);
    DROP TABLE public.pages;
       public         heap    postgres    false            �            1259    65651    pages_id_seq    SEQUENCE     u   CREATE SEQUENCE public.pages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.pages_id_seq;
       public          postgres    false    234            �           0    0    pages_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.pages_id_seq OWNED BY public.pages.id;
          public          postgres    false    233            �            1259    16594    photos    TABLE     �   CREATE TABLE public.photos (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    type smallint DEFAULT 0 NOT NULL,
    id_product integer NOT NULL,
    status integer NOT NULL
);
    DROP TABLE public.photos;
       public         heap    postgres    false            �            1259    16592    photos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.photos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.photos_id_seq;
       public          postgres    false    211            �           0    0    photos_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.photos_id_seq OWNED BY public.photos.id;
          public          postgres    false    210            �            1259    65664    posts    TABLE       CREATE TABLE public.posts (
    id bigint NOT NULL,
    category_id bigint,
    created_at timestamp without time zone,
    description character varying(255),
    image character varying(255),
    slug character varying(255),
    status character varying(255),
    title character varying(255),
    image1 character varying(225),
    image2 character varying(225),
    image3 character varying(225),
    description1 character varying(500),
    description2 character varying(500),
    description3 character varying(500)
);
    DROP TABLE public.posts;
       public         heap    postgres    false            �            1259    65662    posts_id_seq    SEQUENCE     u   CREATE SEQUENCE public.posts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.posts_id_seq;
       public          postgres    false    236            �           0    0    posts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;
          public          postgres    false    235            �            1259    41112    productrelations    TABLE     �   CREATE TABLE public.productrelations (
    id integer NOT NULL,
    product_id integer,
    productrelation_id integer,
    status integer
);
 $   DROP TABLE public.productrelations;
       public         heap    postgres    false            �            1259    41110    productrelations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.productrelations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.productrelations_id_seq;
       public          postgres    false    230            �           0    0    productrelations_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.productrelations_id_seq OWNED BY public.productrelations.id;
          public          postgres    false    229            �            1259    16497    products    TABLE     �  CREATE TABLE public.products (
    id integer NOT NULL,
    product_id character varying(255) NOT NULL,
    category_id integer,
    title character varying(11255) NOT NULL,
    description character varying(11255),
    slug character varying(11255) NOT NULL,
    metakey character varying(11255),
    metadesc character varying(11255),
    price numeric NOT NULL,
    pricesale numeric,
    discount numeric,
    "position" character varying(11255) NOT NULL,
    direction character varying(255) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    image character varying(255) NOT NULL,
    area character varying(11255) NOT NULL,
    address character varying(1255) NOT NULL,
    phone character varying(255) NOT NULL,
    customer character varying(255) NOT NULL,
    room numeric,
    maincontainer boolean DEFAULT false NOT NULL,
    dealcontainer boolean DEFAULT false NOT NULL,
    container1 boolean DEFAULT false NOT NULL,
    container2 boolean DEFAULT false NOT NULL,
    requestcontainer boolean DEFAULT false NOT NULL,
    itemcontainer boolean DEFAULT false NOT NULL,
    servicecontainer boolean DEFAULT false NOT NULL,
    regioncontainer boolean DEFAULT false NOT NULL,
    status character varying(200) NOT NULL
);
    DROP TABLE public.products;
       public         heap    postgres    false            �            1259    16495    products_id_seq    SEQUENCE     �   CREATE SEQUENCE public.products_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.products_id_seq;
       public          postgres    false    203            �           0    0    products_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.products_id_seq OWNED BY public.products.id;
          public          postgres    false    202            �            1259    24661    requests    TABLE     �   CREATE TABLE public.requests (
    id bigint NOT NULL,
    acre boolean,
    price boolean,
    quality integer,
    search character varying(255),
    status integer,
    title character varying(255)
);
    DROP TABLE public.requests;
       public         heap    postgres    false            �            1259    24659    requests_id_seq    SEQUENCE     x   CREATE SEQUENCE public.requests_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.requests_id_seq;
       public          postgres    false    215            �           0    0    requests_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.requests_id_seq OWNED BY public.requests.id;
          public          postgres    false    214            �            1259    32888    roles    TABLE     k   CREATE TABLE public.roles (
    id integer NOT NULL,
    name character varying(20),
    status integer
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    32886    roles_id_seq    SEQUENCE     �   CREATE SEQUENCE public.roles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.roles_id_seq;
       public          postgres    false    223            �           0    0    roles_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.roles_id_seq OWNED BY public.roles.id;
          public          postgres    false    222            �            1259    16558    sliders    TABLE     �  CREATE TABLE public.sliders (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    link character varying(255) NOT NULL,
    "position" character varying(255) NOT NULL,
    image character varying(255) NOT NULL,
    orders integer,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    status integer NOT NULL,
    metadesc character varying(255),
    metakey character varying(255)
);
    DROP TABLE public.sliders;
       public         heap    postgres    false            �            1259    16556    sliders_id_seq    SEQUENCE     �   CREATE SEQUENCE public.sliders_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public.sliders_id_seq;
       public          postgres    false    207            �           0    0    sliders_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public.sliders_id_seq OWNED BY public.sliders.id;
          public          postgres    false    206            �            1259    32894 
   user_roles    TABLE     ^   CREATE TABLE public.user_roles (
    user_id bigint NOT NULL,
    role_id integer NOT NULL
);
    DROP TABLE public.user_roles;
       public         heap    postgres    false            �            1259    32901    users    TABLE     �   CREATE TABLE public.users (
    id bigint NOT NULL,
    email character varying(255),
    password character varying(255),
    username character varying(255)
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    32899    users_id_seq    SEQUENCE     u   CREATE SEQUENCE public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public          postgres    false    226            �           0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public          postgres    false    225                       2604    24675    areas id    DEFAULT     d   ALTER TABLE ONLY public.areas ALTER COLUMN id SET DEFAULT nextval('public.areas_id_seq'::regclass);
 7   ALTER TABLE public.areas ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    216    217    217                       2604    57453    blogs id    DEFAULT     d   ALTER TABLE ONLY public.blogs ALTER COLUMN id SET DEFAULT nextval('public.blogs_id_seq'::regclass);
 7   ALTER TABLE public.blogs ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    231    232    232                       2604    32929    carts id    DEFAULT     d   ALTER TABLE ONLY public.carts ALTER COLUMN id SET DEFAULT nextval('public.carts_id_seq'::regclass);
 7   ALTER TABLE public.carts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    228    227    228            �
           2604    16541    categorys id    DEFAULT     l   ALTER TABLE ONLY public.categorys ALTER COLUMN id SET DEFAULT nextval('public.categorys_id_seq'::regclass);
 ;   ALTER TABLE public.categorys ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204    205                       2604    32851    checkout_cart id    DEFAULT     t   ALTER TABLE ONLY public.checkout_cart ALTER COLUMN id SET DEFAULT nextval('public.checkout_cart_id_seq'::regclass);
 ?   ALTER TABLE public.checkout_cart ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    220    221                       2604    16585    contacts id    DEFAULT     j   ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contacts_id_seq'::regclass);
 :   ALTER TABLE public.contacts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    208    209            
           2604    24656 	   emails id    DEFAULT     f   ALTER TABLE ONLY public.emails ALTER COLUMN id SET DEFAULT nextval('public.emails_id_seq'::regclass);
 8   ALTER TABLE public.emails ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    213    212    213                       2604    65656    pages id    DEFAULT     d   ALTER TABLE ONLY public.pages ALTER COLUMN id SET DEFAULT nextval('public.pages_id_seq'::regclass);
 7   ALTER TABLE public.pages ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    233    234    234                       2604    16597 	   photos id    DEFAULT     f   ALTER TABLE ONLY public.photos ALTER COLUMN id SET DEFAULT nextval('public.photos_id_seq'::regclass);
 8   ALTER TABLE public.photos ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    211    210    211                       2604    65667    posts id    DEFAULT     d   ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);
 7   ALTER TABLE public.posts ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    235    236    236                       2604    41115    productrelations id    DEFAULT     z   ALTER TABLE ONLY public.productrelations ALTER COLUMN id SET DEFAULT nextval('public.productrelations_id_seq'::regclass);
 B   ALTER TABLE public.productrelations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    230    229    230            �
           2604    16500    products id    DEFAULT     j   ALTER TABLE ONLY public.products ALTER COLUMN id SET DEFAULT nextval('public.products_id_seq'::regclass);
 :   ALTER TABLE public.products ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203                       2604    24664    requests id    DEFAULT     j   ALTER TABLE ONLY public.requests ALTER COLUMN id SET DEFAULT nextval('public.requests_id_seq'::regclass);
 :   ALTER TABLE public.requests ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215                       2604    32891    roles id    DEFAULT     d   ALTER TABLE ONLY public.roles ALTER COLUMN id SET DEFAULT nextval('public.roles_id_seq'::regclass);
 7   ALTER TABLE public.roles ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    222    223    223                       2604    16561 
   sliders id    DEFAULT     h   ALTER TABLE ONLY public.sliders ALTER COLUMN id SET DEFAULT nextval('public.sliders_id_seq'::regclass);
 9   ALTER TABLE public.sliders ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    207    206    207                       2604    32904    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    225    226    226            �          0    32838    add_to_cart 
   TABLE DATA           h   COPY public.add_to_cart (id, added_at, price, qty, status, user_id, product_id, added_date) FROM stdin;
    public          postgres    false    219   �       �          0    24672    areas 
   TABLE DATA           E   COPY public.areas (id, image, product_id, status, title) FROM stdin;
    public          postgres    false    217   �       �          0    57450    blogs 
   TABLE DATA           �   COPY public.blogs (id, address, area, category_id, created_at, customer, description, image, metadesc, metakey, phone, "position", price, product_id, slug, status, title) FROM stdin;
    public          postgres    false    232   3�       �          0    32926    carts 
   TABLE DATA           P   COPY public.carts (id, added_date, price, qty, user_id, product_id) FROM stdin;
    public          postgres    false    228   ѭ       �          0    16538 	   categorys 
   TABLE DATA           �   COPY public.categorys (id, title, slug, orders, metakey, metadesc, created_at, maincontainer, dealcontainer, container1, container2, requestcontainer, itemcontainer, servicecontainer, regioncontainer, status) FROM stdin;
    public          postgres    false    205   ��       �          0    32848    checkout_cart 
   TABLE DATA           �   COPY public.checkout_cart (id, delivery_address, order_date, order_id, payment_type, price, product_id, qty, status, user_id) FROM stdin;
    public          postgres    false    221   ��       �          0    16582    contacts 
   TABLE DATA           h   COPY public.contacts (id, fullname, email, title, phone, detail, image, created_at, status) FROM stdin;
    public          postgres    false    209   ��       �          0    24653    emails 
   TABLE DATA           3   COPY public.emails (id, email, status) FROM stdin;
    public          postgres    false    213   D�       �          0    65653    pages 
   TABLE DATA           �   COPY public.pages (id, category_id, created_at, description, image, slug, status, title, image1, image2, image3, description1, description2, description3) FROM stdin;
    public          postgres    false    234   ��       �          0    16594    photos 
   TABLE DATA           L   COPY public.photos (id, title, image, type, id_product, status) FROM stdin;
    public          postgres    false    211   ��       �          0    65664    posts 
   TABLE DATA           �   COPY public.posts (id, category_id, created_at, description, image, slug, status, title, image1, image2, image3, description1, description2, description3) FROM stdin;
    public          postgres    false    236   ��       �          0    41112    productrelations 
   TABLE DATA           V   COPY public.productrelations (id, product_id, productrelation_id, status) FROM stdin;
    public          postgres    false    230   ��       �          0    16497    products 
   TABLE DATA           Z  COPY public.products (id, product_id, category_id, title, description, slug, metakey, metadesc, price, pricesale, discount, "position", direction, created_at, image, area, address, phone, customer, room, maincontainer, dealcontainer, container1, container2, requestcontainer, itemcontainer, servicecontainer, regioncontainer, status) FROM stdin;
    public          postgres    false    203   �       �          0    24661    requests 
   TABLE DATA           S   COPY public.requests (id, acre, price, quality, search, status, title) FROM stdin;
    public          postgres    false    215   ��       �          0    32888    roles 
   TABLE DATA           1   COPY public.roles (id, name, status) FROM stdin;
    public          postgres    false    223   ��       �          0    16558    sliders 
   TABLE DATA           t   COPY public.sliders (id, title, link, "position", image, orders, created_at, status, metadesc, metakey) FROM stdin;
    public          postgres    false    207   0�       �          0    32894 
   user_roles 
   TABLE DATA           6   COPY public.user_roles (user_id, role_id) FROM stdin;
    public          postgres    false    224   ��       �          0    32901    users 
   TABLE DATA           >   COPY public.users (id, email, password, username) FROM stdin;
    public          postgres    false    226   �       �           0    0    areas_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.areas_id_seq', 19, true);
          public          postgres    false    216            �           0    0    blogs_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.blogs_id_seq', 8, true);
          public          postgres    false    231            �           0    0    carts_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.carts_id_seq', 1, false);
          public          postgres    false    227            �           0    0    categorys_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categorys_id_seq', 49, true);
          public          postgres    false    204                        0    0    checkout_cart_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.checkout_cart_id_seq', 1, false);
          public          postgres    false    220                       0    0    contacts_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.contacts_id_seq', 28, true);
          public          postgres    false    208                       0    0    emails_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.emails_id_seq', 131, true);
          public          postgres    false    212                       0    0    hibernate_sequence    SEQUENCE SET     A   SELECT pg_catalog.setval('public.hibernate_sequence', 10, true);
          public          postgres    false    218                       0    0    pages_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.pages_id_seq', 30, true);
          public          postgres    false    233                       0    0    photos_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.photos_id_seq', 54, true);
          public          postgres    false    210                       0    0    posts_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.posts_id_seq', 13, true);
          public          postgres    false    235                       0    0    productrelations_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.productrelations_id_seq', 85, true);
          public          postgres    false    229                       0    0    products_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.products_id_seq', 43, true);
          public          postgres    false    202            	           0    0    requests_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.requests_id_seq', 17, true);
          public          postgres    false    214            
           0    0    roles_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.roles_id_seq', 4, true);
          public          postgres    false    222                       0    0    sliders_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.sliders_id_seq', 9, true);
          public          postgres    false    206                       0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 20, true);
          public          postgres    false    225            &           2606    32845    add_to_cart add_to_cart_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.add_to_cart
    ADD CONSTRAINT add_to_cart_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.add_to_cart DROP CONSTRAINT add_to_cart_pkey;
       public            postgres    false    219            $           2606    24680    areas areas_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.areas
    ADD CONSTRAINT areas_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.areas DROP CONSTRAINT areas_pkey;
       public            postgres    false    217            8           2606    57458    blogs blogs_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.blogs DROP CONSTRAINT blogs_pkey;
       public            postgres    false    232            4           2606    32931    carts carts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.carts DROP CONSTRAINT carts_pkey;
       public            postgres    false    228                       2606    16555    categorys categorys_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.categorys
    ADD CONSTRAINT categorys_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.categorys DROP CONSTRAINT categorys_pkey;
       public            postgres    false    205            (           2606    32856     checkout_cart checkout_cart_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.checkout_cart
    ADD CONSTRAINT checkout_cart_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.checkout_cart DROP CONSTRAINT checkout_cart_pkey;
       public            postgres    false    221                       2606    16591    contacts contacts_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.contacts DROP CONSTRAINT contacts_pkey;
       public            postgres    false    209                        2606    24658    emails emails_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.emails
    ADD CONSTRAINT emails_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.emails DROP CONSTRAINT emails_pkey;
       public            postgres    false    213            :           2606    65661    pages pages_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.pages
    ADD CONSTRAINT pages_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.pages DROP CONSTRAINT pages_pkey;
       public            postgres    false    234                       2606    16603    photos photos_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.photos
    ADD CONSTRAINT photos_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.photos DROP CONSTRAINT photos_pkey;
       public            postgres    false    211            <           2606    65672    posts posts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_pkey;
       public            postgres    false    236            6           2606    41117 &   productrelations productrelations_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.productrelations
    ADD CONSTRAINT productrelations_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.productrelations DROP CONSTRAINT productrelations_pkey;
       public            postgres    false    230                       2606    16514    products products_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.products DROP CONSTRAINT products_pkey;
       public            postgres    false    203            "           2606    24669    requests requests_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.requests
    ADD CONSTRAINT requests_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.requests DROP CONSTRAINT requests_pkey;
       public            postgres    false    215            *           2606    32893    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    223                       2606    16567    sliders sliders_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.sliders
    ADD CONSTRAINT sliders_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.sliders DROP CONSTRAINT sliders_pkey;
       public            postgres    false    207            .           2606    32913 !   users uk6dotkott2kjsp8vw4d0m25fb7 
   CONSTRAINT     ]   ALTER TABLE ONLY public.users
    ADD CONSTRAINT uk6dotkott2kjsp8vw4d0m25fb7 UNIQUE (email);
 K   ALTER TABLE ONLY public.users DROP CONSTRAINT uk6dotkott2kjsp8vw4d0m25fb7;
       public            postgres    false    226            0           2606    32911 !   users ukr43af9ap4edm43mmtq01oddj6 
   CONSTRAINT     `   ALTER TABLE ONLY public.users
    ADD CONSTRAINT ukr43af9ap4edm43mmtq01oddj6 UNIQUE (username);
 K   ALTER TABLE ONLY public.users DROP CONSTRAINT ukr43af9ap4edm43mmtq01oddj6;
       public            postgres    false    226            ,           2606    32898    user_roles user_roles_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT user_roles_pkey PRIMARY KEY (user_id, role_id);
 D   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT user_roles_pkey;
       public            postgres    false    224    224            2           2606    32909    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    226            D           2606    41118 ,   productrelations fk50udysji59va2wudvywrpiy2u    FK CONSTRAINT     �   ALTER TABLE ONLY public.productrelations
    ADD CONSTRAINT fk50udysji59va2wudvywrpiy2u FOREIGN KEY (product_id) REFERENCES public.products(id);
 V   ALTER TABLE ONLY public.productrelations DROP CONSTRAINT fk50udysji59va2wudvywrpiy2u;
       public          postgres    false    203    2838    230            >           2606    24758 "   photos fk9t0pg7dyq05itgeg65pml5m1e    FK CONSTRAINT     �   ALTER TABLE ONLY public.photos
    ADD CONSTRAINT fk9t0pg7dyq05itgeg65pml5m1e FOREIGN KEY (id_product) REFERENCES public.products(id);
 L   ALTER TABLE ONLY public.photos DROP CONSTRAINT fk9t0pg7dyq05itgeg65pml5m1e;
       public          postgres    false    2838    211    203            ?           2606    32868 '   add_to_cart fkefwsmsglr8jfw2lvt2y7cb6wh    FK CONSTRAINT     �   ALTER TABLE ONLY public.add_to_cart
    ADD CONSTRAINT fkefwsmsglr8jfw2lvt2y7cb6wh FOREIGN KEY (product_id) REFERENCES public.products(id);
 Q   ALTER TABLE ONLY public.add_to_cart DROP CONSTRAINT fkefwsmsglr8jfw2lvt2y7cb6wh;
       public          postgres    false    219    2838    203            A           2606    32914 &   user_roles fkh8ciramu9cc9q3qcqiv4ue8a6    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT fkh8ciramu9cc9q3qcqiv4ue8a6 FOREIGN KEY (role_id) REFERENCES public.roles(id);
 P   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT fkh8ciramu9cc9q3qcqiv4ue8a6;
       public          postgres    false    2858    224    223            B           2606    32919 &   user_roles fkhfh9dx7w3ubf1co1vdev94g3f    FK CONSTRAINT     �   ALTER TABLE ONLY public.user_roles
    ADD CONSTRAINT fkhfh9dx7w3ubf1co1vdev94g3f FOREIGN KEY (user_id) REFERENCES public.users(id);
 P   ALTER TABLE ONLY public.user_roles DROP CONSTRAINT fkhfh9dx7w3ubf1co1vdev94g3f;
       public          postgres    false    224    2866    226            @           2606    32873 )   checkout_cart fklci5l8prp7oa5fte81fn16jxe    FK CONSTRAINT     �   ALTER TABLE ONLY public.checkout_cart
    ADD CONSTRAINT fklci5l8prp7oa5fte81fn16jxe FOREIGN KEY (product_id) REFERENCES public.products(id);
 S   ALTER TABLE ONLY public.checkout_cart DROP CONSTRAINT fklci5l8prp7oa5fte81fn16jxe;
       public          postgres    false    2838    203    221            C           2606    32932 !   carts fkmd2ap4oxo3wvgkf4fnaye532i    FK CONSTRAINT     �   ALTER TABLE ONLY public.carts
    ADD CONSTRAINT fkmd2ap4oxo3wvgkf4fnaye532i FOREIGN KEY (product_id) REFERENCES public.products(id);
 K   ALTER TABLE ONLY public.carts DROP CONSTRAINT fkmd2ap4oxo3wvgkf4fnaye532i;
       public          postgres    false    2838    228    203            =           2606    24646 $   products fkr638shrnkkh3wy5llr9cwyi4t    FK CONSTRAINT     �   ALTER TABLE ONLY public.products
    ADD CONSTRAINT fkr638shrnkkh3wy5llr9cwyi4t FOREIGN KEY (category_id) REFERENCES public.categorys(id);
 N   ALTER TABLE ONLY public.products DROP CONSTRAINT fkr638shrnkkh3wy5llr9cwyi4t;
       public          postgres    false    2840    205    203            �      x������ � �      �     x�M��N�0�继�T�aLS AIZ	u1i�Dn�&CYXa�	L��1���7�|�ﻟ��8~k%�t�B$�P�9�6����}R�;�ءa�k�]��=��=U~
���`N���"�c\��!�1,����&����w��s����ꍝs1Ӆ�pAf�ٙ��Fu�wi�T�?9��]8��.��}ՄzP(�<�Y}���sJ~m�ř�uþe ���V�9��]#������|)�M�k7k!�^o~�      �   �	  x��WmO��<������ם7�1�p�i��'�JH�0f=�k���u�}�ڭ��j!�m��f���R�a(�c�I�s�1t��� ���{^��s]�&G���^�4,�4,c�a40�N~)���Ϩ�����K����?�6�=O��GÏhC�t�Q�&v:���/�hח!(�?b���i��7�I:;H�/c����Q��Q=����t�^ҭ����p�SJ߆ַ�!iU]�O)�׸2����"֚h�d,۾m[�U��?iG~�[z]�a:9�.�w��%��$o!m����@<�{�3��|�:<���C6��a��Y�/W�b��w����V�}�_ә���V�=H���'�β�JZ�꿡�"q�Tò����Y}�6o��X����f"�ɶ�;[R�Þ��g��a��Q��9|_u�5j���6h�/p�j֓'+Ԩ��ќc�e�&��<����wǪ�B�òl�f�Q����ɶqg��N�A:�v���G��T��ʇvѲ=Da|,qC:�2�M�GmȍH�p�����p�c��O0����>���r�?�8���,/�8��=9
�,�8q̛�G���r�{����An�Ai�
�
��Cā9��t�O���Ƶ�R+lv�cTw;��p]��� ���vc*y�75*TTбL�bU��á� :�q�um�28��_!|ΝA�jO'+*��:,�%ǌQ]�W]#���_���OW��U���F�U)^�a@��P�a�D ]���xb)�H�d�� V_�+��O�0�����w��Kd��^%�9ˠ;#�<�.��6����r��<3��@�-�{�57-�P�W��!��j0�Bj��"��h�`�gH�fD����%�&�=ؤ-�;� �f���!SdJ)AػE8c�:f��ɎtT��p���x ���� �O�`����M�a�,�U�qc��8×k�NY|4��u	_�rųJG3��bN�����?� ,]
�cN������c���=�i�q6`�Xભj�'�p��pK1����p�-q�������h�Ê� �� �
6��d�9;������ط�j�6Ϗw�CܮYQS�L�c�q����bq�6h�~~���q�n8v����u`�Q���0��1ב@ah�B�Q�&����%ӆ�UW��ǐ�<[�/�S���6]_�߽���	&J���9A7�@��׎�Tl�Orܡ�ϠQɠ�\QdY�+���/�Y1��U��e��y���/H�{X��K��jG�
�:�8��|���`�A���U\gj���j�M'�K���� �^�&8�ڵk��U�Kbw�m۳@�R�	*:���+IK!��mrN�2�ysM�/��Vr�.��#��P���X�ќ&�)��G u8@a��D��@�/F����b;�̩
ȸ �|9�ࡶr����u����m�&����I�\#A}�����fq���F������S��>�[lT�4y�:$@���"�V�'(�f��ܼ��8f���Wq��`���1<O#�A�ۼQ�� �)ʺ��]n�����f�"����s_�M�w�8�s^�5!�n����|��-�)��Y�e���7�Cp��
�VnMH�\�v��;��Y���H%�����y��ך����9w���b�Wy�A�
(J�v���>��,Vj.�-�l�D;h��_�h�e�GͥZ׬�����0��Myt��~�1~1,�P�-Fg�ǥ��P���.�p��w�#"?Cp9t���S�GqVl����!�w}�e�t��ʷ�������wq|��o��f��m�AM�A娰���!i�뾪����<?�C\�u[[�A|e����̒��}�)�����hB�/��3���&z�XȊ�P5ꌤ~F���x�hUlȆ:�N��`�y�u���'�!�PdoȦ�Ts�{'������B*.�n�����~�# �[#Τ���qd�����RiG�S��r��^Kxd�]g���Ò�E�]7�Q�^_6����=�+n�o�~*��Nj^�w�\�g@��.2��
���W�e�
Qh ܊b�K�-��EL��;���-�yLc�[���o�<T�t[�KB3�=�Z��}]"��\��'�-ps�'�nfyv�B?Ct�*�����`�]��e3ҁ�m��H�o������e$�� �-�,�S����`Լ��_�
H%]���w�Tt:,)̈���|�����b��AҪ8f��=�K�,��y�l;���l3�Vu\#��]��:��V�#�[r�Z\=I8'�	�D��}C7�<�ߌ�d У�f1P�a.�?}�0��<�J5֔��;f�K��L�V�	Uv.�7�'����,�22-[��r��<��rz،�ƒJ\q��Xm@)��~^n��MfESi?�Q����7[62(      �      x�3���44�4�4�4����� Z�      �   ~  x��V=o�H�ǿb��LC\��ri�bW��I�KHZ*�R��+�H���p��A$�q�C*	�4�?�O��R���P�,�"��fg���U�A<�˧����n5i�;�o�+_�K���#k�uj�Vn��m���Q�Uo7<��/3��&�@�)pD���*���Ju$�����^t���>^��9�a�}Ց��؇q߼}Pt�aT�}�~��q����jl+.fk���dɲ:Ms�]��|�c���PL:�h'D���1�:Xx���	bc�T��^�P\<=�1�G����%#l���:c��*��>��k7�J���߇}���&m��O8�	g�@{nץ�(ɧ�1��!%~�����(�C6��'��׏��m��RU,��_��	W�v�O���e%TC��e�O�ka��4�.g�Ӏܲ���iUQ����OBo&a^R���tV)!��>�z��J\�DS�T�>eYUCkҫ��|�w����6�[VP%(�A/U
w̾��goE?��SW��/9v�IL^�8���� oZ�p����<Pi�@^�����,l>�K�d�����,[�~5�c��#��E�O��VG�b�Z4*�-(p;F/'0E��=²��-a�}��2n>���O��|���U]	[J���N<�`Qɝ�g�PD/^C!g�8�M�9�8�"w���^�g;�9��}s�H0č��IkK����;�g�P����5���[�h� kC��
QD�;�p���-�G{���ߤ�����?X5�ƈU�&KoBr'y.8��[�Zxs����>j��tj� ��{��Ȇ���E[�_a1
ms�TǉbhJVh�-)j�E�!�~a��e��
f�E���`�������ښ��P���w�R���)OKT�z��Xt��L=�k�/y;M�b}c[�r]lDTn�J{��BˣfVP�'��XO����\M�Ol�y�S���s��l�9_q���)�ڛ'�[#�~������q���&��w�����ݬQ,���h�RATO����F=p�����U�i<Igۖ�bw����W����l��'�2�m"�H�"S� f��`�ϑ��P[��љ���R~�$�Z���m�3�3�9p�G��0ѱ�`ͣ"7��s!�4}��u��È��(�ށ������d_�      �      x������ � �      �   �   x�}ͽ!���e
���;���	l.�����p0/j�����AM��K�լs�ך֫�s�j��&�i>�}+P.�蝰�^��񜀑ɠ34h�9X􎑀��N��W����i{#�Y"�(n��R�	�e8�      �   ;   x�34���K�O�����O�KwH�M���K���4�24�@�4���DU`lS�!���� �-      �      x��\]��d����V�Y�d7e�7{1"�,�B"f���J�q��˞*ە*�6�W�"�BCĎF�eI�ʰ� a��-4��U�D�K�<���U��� �]v�>��|���֎��5<�it�m��W��W��}e�[~2��tu/�������5=?=����(��\���`�#��l�g���hY��躍F��m{N��3����N�����<��܉}g�g�.��I҈?��=>}6�s'�c+:ɨ�h���k��٣dle���/����տ{�0�O}J/�OO+9?�c�+3�C�Y�t��W��<}7���h�q�Y�y~�yd�#?�ƴDB+��<��`�#.�����x��VF�I�����N����w�ruϚ5��ͣ�w�f~~��o�Md��`uЯg�Z�Qb�N[>��9��}@>�]w��ںÜDw�a@����׬˫oiŧ��X�H�mn��k��I�gɶw�-Zr~�߆O��)��.����?b��2���i�c��*u���x�����ؓM�Wߵ��g��7�ocV��w���g_���]��g����o�g[��W����> j���Є�hk��v��V������');ie���BaG���� vVchhBwc�YV�.�����r�*J�;x{���U+��l�n�~��Җ����0!z�Gz͎3F=%���hy^��\���GB��~�\���>�)8Q=	W�AeC��Ǽ�GD<9�q������)"	���&���=��$�>�D����+13��g������/���D=�!ˇ̢����5|l6~e-�l����eo�G�����Rܒ����[W����5�pZ�͢����}�_�yo�|��[p���z��@�������ս��q.��'w����6:�w�+��#
�a��>)��k�Z0E�ZjS8	��@^�%�;������З��&��������g��!���ɫ��@�$^0��e[1٩�.r�'���"õ�4)�ڳ��~�B�nBZb-��ĺ���t�4_�x'�#��_n�W���.<�������[p�)cݍi!l9��b�k���D�=xihY��n���N��=T]䝈.g�;q��i@^�!m��$�r^�(��iN>�?rn��Q���;���ώ-l�� �z����1vж(��X=!u��bA����v�-a� j�%�MV_|�Ŏ�C#흭ֱ@$����h:]ؐ�0�F�Ro�b��B�()'d���c�E�P��;��!� �W�/�E4!��#?��.Gwe�:� O�n�ݖC���PBz�`�`�yN���$��[����.�d�cv,��U �Y}��Q M���mj�eL����[��;#"�$��f�f�P\��o6���+���� h�}	q������$�0mX�}r������^}��aV*��m]��Ⱥ��5S�����P�&$)��TSl�n7�Hu��/���^_��w�����3�Ye��lXo��|������aH�*��Kk= �Ym��1��9�����\��l�A�(���Ր�O"��q�b򐈥�v�:\YU�g��hlzB�o�N(�e�a�=F���S0�K����'V�~��u}�uC��,+�$c�H]!ǡ�0��y1���(F�?/��� ��x���Aj�f��A�J����H��P�y~�J<x~G��&M�ΖC8~�Ĳ�8���,�Vbw@�����i��73���,V�:��4�~���'��$��`"K�v�*і�O�2|j�q��� ;^�m��v�5&i�B� �h;�#�!p)�4���S�8�����ә��--b���j�"x���qVq%KĪ�x1�X�t镖�6��鍆���q�a���w�?����N`�Ԟ߁�����FbPt�m�%���	E(���L8ֆ���>��D���!-������Oh�\X}��6����^��"^���7�߮�y3�a����E\G��at����c�kğqlI@�G�{�e��֙��T��u�rs^�����u�ևb�㡮�'C �3�l�Ϙ8E�l��2A�ȿ�bH/X5�`��nZl�3  �g���0�dm��(�W�^��lA���M���}k.P��������`a�n��1�)�2xHL���h��N���Yݽ��Ns��z3��d�x�.R���{5M2<"n�}��?����잩�CÉ���.U<�z��?E�݅��Ƈ��}Z��o|b��@ �?�ŋ�o�w��C0�*V7GE���s]��t}Ϥ�bg�2Txr�����,�Nv������(�A�ПO�EO��4���5R�Gq]/ʨD ]�L��	���ð��!ɧ�
ױ�u@K�կS�5c���Q�=�t��6Ff�W��~>�M
��@jTS�t$�Q�� u�z�[����I����v��C���@m�2Ӽu(1א�A.�`�r�[�W�iҤd�o�T)?$v���Zz�#����HU*��%g�x�b�Х]��b5��8'nY��D#�2Z5�lUx�ۨ��T��C��7N�!%�ê���=�;�iEp$�o,��N�K�>^� z��r�I��*�B���J�h���`{�	�-�[������>���F�O�E�:�@щ��D?�f206"��a "֥�	�_��1�|���P�a6�_����7�Z��u�+]g����Wz���	������fF�'��d�@Q�K�Z�Q�T@Z֡���H�C)��0���u��'r��͞u#٠��m�^t�V( ����jJ��sŏ
 PrM,>��R���O�_>�Hz��������>IH]W���PI�y�@��������ɭr1�+S���P��(`U����6;4�[�$�)}� ���믿B�������K�V��Q��m�+Y�&/�͝�F/q�!�ƺ���KVXd!�0��~��Zs9�k*�T�\�
&8WR6�ѣBd���t�a����0
F�c/�O�R��(��.m��n�ZM�AE����s��ɾ�ה�w�
�E�F ; yyP�u���'Q.^�˹��B�,���u�\�����Ed��=���4(I4Q$�2�HZdK6�u8�(��E(6�87P�qcB���<�\!��9؉U~�N��ǺK�qF� u�� REAq�f[5�-�`��c� ܟ��ǧ)�B�xG�RP^�=��b$3�Tgc0L���!՜�앵A����%�;�DCp�PYݕ���j�'� u�P�[��5���ii)�W�M�=�P�	g�hX��@ɸg[J$v�"%��0_oq1�C ��2;g
�י���
���)*�(>%R]`�b����ƾ�ƸZ+;p�@�L��+aS��P�ng�߹JΓ������-ֹ�E���C|����	���1wN�M���8���Lw�z���n��p�P��YR�Nks�
$9�ky���jŻ���D�3>[�${i��4����/s�(Q�&c��z^��	�6����M�������2$FIϗŰ��Ѧ�obؓY�:���ȼ+~<M6��;�Ͳ�l�b�FC�nԚ��PSi$|g�.�t�"FG�nT�uu=H��=��zp��'�N��q"�#&H��\��ɷ�r8i�F��u�^��4�]��RF�NX"
�������?C	rj��|��Rs2�
�La��=�,�c�uLW?o�Mo�l���������-�d��#�i�#+�Tz}�i�䱗K�a�U�"��f��Eu$�������Y�٦S wS�:	0gŬ"�j�m���o�4��Lş����"ˇQ���?0M���V��E�7��Ё���`����4�ab"�	���	Dr��d�^�>k��l�'ئ��" j��d���[#�F�:�~��k�C�EKMA+J�>��O	�S����ڲ���.�K�Q��i<HQ/���J��޷���!s���'�4�3��n���f(�2�K鎄�`!�P�<�Il��Sq��.bE�L�#���n&�m#.����x�-�y�G6Y^Yh�Ҩ��Ԫ���k�?�������    cB�U�@�HJ�|q.����t$�0�R�Ptފ��k7���鴛ݚPn���XOF�@Uj�LI&�BUwH=��V�j���j�9s�Y$�u� ����&ɸ;���Q�p��γ�"���k����Ujd� �n��Ҁ�D����c�	�p���������{e��5:�������d�R�3s�!!T}��#6a�6'-�h8�bȉ��gFy�!:T��"!�R0���a���m��ܣ�"Ĕ���J8����euy-
}�j��(��0�R�>�9�Hc��[�*�-�gWgR�я�t�z�s�ӇG6
���T��tB0��8��@'�T]��+i*�&aA�Pa�,�5R�� ��,�dB�R������ė����)�0`�8���Y�C8�+����Q�8㰭f��r���N��V�)�2=t6S#Rg���� �@�Z�ћZv�װb�G�<��eK�l̫�D�G�9�zjY�M��O�x�v��[=�Ġ�02@�aLa��]���8H����r0��e�IH�"�~��^��
ER�}o�ug��-n��E�bE�� �Rğf��sD�s<S��ؼA��-sEo����b�PG�tʩ���3��kV��qil�UY�� �'��E�k���15�GDq�kX�X�oؠ�]0���>�lݒ�4���Z��`>��ϛ�\T��n���-��T5��.�ӀDLP Q�Oi��nEA*}�F�h��)�4��1�2�j���c[Wy�u���h}LWz�`����]S^:`v
�f(�$��Kj�WiR�UxP�s3K�A�b�SI�`�3N���.��ò�INbR�$ʈ���m��P�r	��� >H!��z���F9.E- ���DZD�Q�5v�!�d�:���X8���Ƴ,\���	h���=I+�X��Q�VfF����Ǭ^'�>eE�?�!lE�Je�i�=���|�ns˼�u?7#��m��A�9#iF%C�ҵ��Z��1�?o�ƣdh]�ɏr�ɨ�e�S�zѼFE�-����h�ZW��0J�mL ���*)�r��Z��p%
k�.]�S��Dө�(�ϔ���F���)�t�wY�0��<appP�3�沺����M R_I��B�U�z�Y�6�����q��P^��w=�*���+�������(H���>"�cӼ�zY�����yt����ց��7"5J�M�K8�������s��,�O,����&՚"%�Lf����������Ld�K��>�(�~�SLk�19�M(~�)k�E��E�
m&�pe	g��k<��^����4鸠}!e�Jw���H�� R[��@(��f�����*��`��Ae������������v���k�������PX�eT�q��lG�/Ӂaj���,H��r�C�5��؍"Q����n$�$9��\
\��B��0�@k���xCV� ��A�$e���y�V����t���p�qi0wy�NÀ�I�ʅ"�g7
^y��԰�Mh������W�B&������=� �7KI�x!JȊShN�� �H���R~|Hl���T�肘y��G��E�b�r
O�#�j�ލ��j��&̴��J��[v�m(�(��Lz�g�|����(P�����bD�){n8 ~� �_ެhQ%XK�Η�A���y"�~}��U���i�EWI#o�8=����~77]�����`�&v1����r��/�l��G�d�AMṤ����*0S*X �U�4`2��p�����7AY���Htpe�W�XF\R� QQm_"��S��¦,*.�,)IVȓ)�T�.�����-6{���/2���h4�M����b;�"0����7��ٛn}�&Ќj˰��b��x�Θ�Q�i�I� ")c@!��q�����R�u�v����n�s{���t{�V�o��!]�1����̄��1}�5��A�i�ꩭ�3Wp7qE�g #������s��9z��D�R���>t��yݏW�綺.=���4�A��Y����8��A��_��U���w�n��hv�f��u�pv��[9��K��C-��m�Cg�6���6$���,�2'�����M}�Z���F4��e5�+8gSV����NW?���1t�-x�e���xh���6�� N��u�'
�d��q5�j܏2�:�۪3�5�L�a^���U'S�-ˑ���H��9WO�c�{����Od���ʘ�h����y�Js���s�k�s�P5(ZH�3�ф">굣��~˕��&J��͑io�^Ҽ�W���{r�TvZ�My#�_k9~��X��J�!Chge�P'���<
&��N�C��-(N� ��&;��G�'��G�zrZ�19���^����m%D�ڕ�r"!8�J�y`W�t��.��Hm�\�i3z����T��t��S�OU<<ufԲZ06��W� `���n�] ���+H}}D^<�H����]�4Bq�k�b�Z��,��([[l���ȫNϡ55�d:�r��)+�gT���.`�C�GY=�d��̰���e������M!�>t�Zk�UY�A�l��	��\�#6�f�ݬ��j��>���KJ��T&P"�uJ:N�ٯ��+]�5:m��s�^�d�5n�cxZ�Y�j}�	�j��6����H�IS@a�kbSrm4Ǩ��L��dbJ�Sn|[o�T�3D5vs���簦�S�sE顯g/���u���^~�m�p��.�r�sm¦2ĀNm���9fk�H�����\ ˟Ĕ�T#����[�?�\�p�[9�LB儰Q���D*���A�ЌE����B&�`��#�"�� �Ij�rV���F5W)bņ(���?�^�(��i��MWZ�h�(Nlvqvr�85n�\���0e�"rT��E>�|��Y7�Q!r����{:19?{��g���bx2S�Mpʁ��֢_��)6�����G��j�g�i�c[*g�~@D%��'�81��q����Qs��ub�?q��v�R�c%�`�m�%�@�ǵ&nU͟OId"19v1�2-Xӫ�$��Q78�\~�������L�tua^㱙��[�x��OUM8�3��p������;�-�.��^����^W
��b
�R���~,X4+ŵ��F�rL�H=�4Dt�K��	,c�Inl��-Ɖ�Khv�j6�vcК�2�6\`�#2g������3����%�tN+P��I��_�j[�ڗ�#���@լ���t��9��̯_@�ڕN�0�t�u���@��GE]EƕL����2�l���u�1��cn��z� 35n�@�_�Q�\�!��~���|:K�䄯)
H�S�ZΐYɕE6���M�ig��R��Qi���g�}oKY%��Yj��"t��}Ѝ�b�n�X�߼�z�ۖ�j�99+�$�W�Z�TO=W��Q�G<7��.�%��r%[geDm.͢K�wv	/
��&<���u�X9�ez��:�ԃ��L|	`Mj��6�Y��o:gzxv*osy�8�:�@EeXM���R�����?�S�)�m�����Gx��ٟl�LIK��P'vxz�OF��{�f�̿3R#Ô
��<����E�\7�1����0�N�&�a j��`x�K<w�� UG#ַRyEg�K��
euJ�/M��bI/�Q�m��LI�Y�ya�i��(j��������`�ib�/+���Rû��P&pE�y<����i�!�
)��Nw[���ٳ�A��~��q���4�[&k��9�W����c�I�-�X��5BS�oq���_[{k+6Wk��7	���&�%˻籃�\S��i��.�4I�^��9�~�U	�)���>�)DG	VO�`�j`\�jeWO�� �d1�*U��q^	DíS��-\�VwT�q
=�A�]Q36|�M�t\�>��uL���29�O���_�a��q��E�r�l����+�M!�^��v�k5�a/0u���C�7)�gr�@�?��Č�t����9�`~l,�1��A%#�\o�%{ҙ�[�D|�l�s��5æ�.W8�s���C+�$�B��r|�M�]��, ~�����f�/��A�M����|��@ C  �ܜ|��8���x)���jʉ�����tE�$,n��Ŏb��o����xYhZHТ���˓�8hj��� �I1�(F�ׄ����rh��92��cs1�/�1yu��fSN���ڝ�(��a�^�q[������$f�FV�W>alq����+��6�c���&T��~+��0o���D���ND��az9��)�o���OJ~��U6�����btBj���/R,����Ɩ��	M�8���._8���~�ʪ�ڞ�uFC�#��D��E�Ϫ�'�{�I�'ˈ��������"y�Z�]KWL�u��A�7�vww����      �   �  x�u��n�0���]T�")R�R��c']�tAѤ۞~Vb'�����,�:��	F�Aͻ��7����>?a�ﱂ��оy?�S�P���,�<n�K�=6���cK4���MX���~}�o���tԍ���c�M���-2� )�U՝ǟy����;�<T=xwx?����h�����<�\׹����v́��'p����� ��v��`�B/>Z=��c���|��AQe�,�u� U� �C�B�0�R���aXA��DHv���
E-j�
�!���A�{1Ӎ�}�<6H�	�R�m$VeF�����z�!�"�['�J����\Ӄ��\���j �������P��)čԪ$c䍴�4����Y�c�X�y�C�S�M�BU4�C���%l$V����K���!�;�[s�sjD��S�e�����K�M=�a,a�J%�%ܷ�%�F�}	�ѐ0���zHp����6,[r�JJh�q	��J$%��채��Cge1/�M��(��      �   �  x�}WMo�F=˿b�Sh�"m)=��P8��%����ĥ"�Fԓ�(� @��(�6��u��p��,"ȁN��K�fH}�Uؒ%��3��{3�JV�2,Sk�r�Y��87��M�Ԣ��JT,Y�TD_�M�E#}.���rӑ��=?K~��B��7�hЧHD^��
KD���^�~�<�{�%��@h/�K��n69���_q��^���5}���&'�j;�m?}�GZ{~�\W��Y7֍�Q��vU��u�V���K��R{JZ2��Ri�ړ(I6bWFq�o-�{�ײ�B�[��X%�t��A���2��X� ){S`��2d:鱦�Ga���+?+�Ru)ꛪ�qC�2�������g_D~6yO�gɑ�Yr�ptsHF��x 0;�my�ҝ����H?�}�;���,�^/�H<�T���b;K^(Ċ(z	�|W_&�(|�G"o|b�ŗ[���
�b�n�I4	:x3ԑj�*bQPz`����JA��ߚi�����HȆߊd����b��+e�C��qS���(��jݲ�L�Pp��<{��� v;A\�l�Pk���n0".5ws ���p����H�bP��zD7��<���aΡ��x��7 Kg5M�#a��ݏ/c��dU��	X�f1�&�Ge��>��ݓ��<�"ö�i7���x� �e7&&bI�˾�#-�@t��BP��.R�m��/<�X��R��y;��d�ϫ_E�96���𝒳�[A�,�	7q��J �C�Lo=@��8�;�<*'�HBZ.�g@}��Q�����J1�'
�g�c]���T��B8�&ݍ���t�Yx�y��/8�9hX��B<퐎z�v̦I|�s�1e|,�Yr��3��F�4�Y�Ug}*�FHʂI�A�ŜK�ϐU�]��dwȲ�k`s)�W@\����JkK���B�C��a���{���wD�4�#�>�|����	��
N/v�GL��Є�s��P��D˸����>�#g��D���E{ʧ ���\2-c�X�f��L���C�U=��Z=�1�EJ7$u�f0���a24Y>V�|�rkg�/��]� ����eӡ��"�^<�r�[�!S7>�y&�9�9�B�a�xH�at!C�B�>�����w���3z�r�7o�(�yw_���T�ɉ��(�eR����sj鋷���a���馯t�&���:�O��C�{��+�� �i�!ݜRgϔW4�&W��Ϙ�����+ݩ?�D��}^4"�EFL̺�n�Q��o5&vY�yE�O�ς�Ny�"�bƎi�5�^�)�x�J�jȖY��u�1,C~�Nqe�9L�Bq\3G�W&�B��8���E���QR��>��)��c_�N��bס(;_%��`Y��uE�_�t�o,� fٹ�j���r"���蛽�+>���e�ꦧ�|�����=ᐥ�T��q0��v.R��$]a��"�����4�"�.(�#�d�����\�KNX�Ok�G\/}Ź����g`��y28��%��R{�c-փ�|�hW�i+8q����-���w��ɾk���rE��J��>s)�+�ƟͰ����[5�?!��瑷�K��t�Ŋ�G"���׏�}/��� ]��p�A�n���F�ν�"8s(��eC3�јM�� �)V��`�͖l�j�
�!7���R��4�hp�?��
�!6�3p�H�^�h�ٳ<�<��%~�����+7�l      �     x�-��1D�o��������k��9@ƛ5�E����#&�źb��������ק��V� M���;G���`)�b�(�o�^��7��%T�����t驥�2�����J��5�����!P�S��
�Q��~	�A���Ӄ� �����A�>=8�� r��_�:���-�� ���%��
���%�Apӡ$O�H�'�MJ�K)ڔ�OI���yȱ�CPf!�J2���h!�R�	B���@/�H�nu������2��SJ�hCk:      �      x��[[o�v~���} �3�I�@#9s,1J��؀�b4�9Sq�5�H�)���FP�AP먮�Ă��ijAF��`I�Z{υ����X�H�3{���Z���e\i��j��%��i�����&'?$,	'�b���|�����0df�v�7��E���=c���Q���~~����i�c;a������<������dz����� e�i�,f��a�va������	H'^���]��ċ�F���0�'�8����?	a����B݊[|���C�d|�]/� �ɬ�=�We+�w��쫈鬗�̨E��ֲÄ�@x? a���Ɉv$	���7��[x�QfKa�[1�=��g{ Ů����lo2��� �O6��� ��k2�Hlڑ_�M��L�~W�`�����y����XI��֯Щѡ)Ñn��Q�Y�2n/8L Cn�W&�?ݦ)p^$?��~�K�ߊ�aFa�U�ۊKu�O?�l�}�!����T���uΤ�]��U�H�"�e
{{F��d�)[	�c�j(��E�`-/����Q����m74K��tj�aj�0��tԵM7=O��!�bj;���df&����&��9� ����L��bɕn�OB�����!յV��Xd�� ;��0������~z�c�H��ES5Y2� ���|�&�#;��FRךx�t�` ���5�o{��Um�x��1��$�'�_p��@�ϫ"���+8���(�g6��W��%`y'?%l~#Z�&�R�NN���%��,�Z�����FX�m��,ez��8�!!���'�����Ld�a�}o�.�Q<b>iW�]�3� gp�!�ro� z!� ���&�q(Gt����&��Md-;B�k�p�k(_"#҇���/a�p�=�[���do������\�8ƻ�a�׸��G|Y��#Y@%�>��	��7l�n�9��u���f�pzB�ؒO���������q��vv�&�#�UU �=8��TF�����߲��p ؠg����7P��l}�v���`u�Ɩ�A��X���*M}��s7��.?���3��#~		Kx��Y?���\�����屴�����!��W:`+J�S@�;QL�I�Nw��#=�{��1MM��L�|+��>�ׂaC�,��H��ݺ�u���A o����[��c��mؖ�愢,�
[B�T0ܔ����a:Z-q���*���M��z�@o���D򆩾�z]�����d�
�c��d?�ŋY�2�@v�p5&�r�/�`@3��ӄofR�k@�`f3����b�D&:VĽ���$�%����|��x�+����ءg�nI.Q
��Z#�ۅO������b�� �w<���}5��]��V+��o��dē>�<�4��y��<�ZA&��S���� {��K�~4 o�=8PK���i�cl�1�l	@���`��e'�s� J=����� 6y3^�F�+��~�]K�j�{������,�8���mO�I����A�?x����7,p*������)CSy����v(���R�5X$BP[�5,�t���/iL��2�k%�5KN[(�+pZD��[3��(5MB:K�f����X�e��T�/g�mXr��%5�nӂ�U�Ze��I�2����A5�-����c�mf�nt� h���!�(��=Z;���3�-����	�����0<��M�̌�2���(;B���V`����c|���T<���ayL�u^Bi8ۖ� rQ�� �P��|C���MTl0�aD	�s�"��k�L�ϗ4��i�]/���oa�k��D1�T�/ē�m��������� �x�����Z]7L�p\6�9�p��O�֌M֤�5o޴ɖ��z��+!��n@�ҙ�|�S�(���+�`p�"�Mq5�-:������SV�M|p:�>J�2�	���vS% gԁﵺYWt����S(�c�3�:_�Ԅz�
5�L�=�+P)R:@�q��L�v�\�ѽԷ�ɱ�A�b�3zRL&Oͥ���0�=�wV�4|>O�ɾ�\u`��-�[9�����O�����[�ol��k7�^��[��<�`-`��۬m_�U�R!�u@�A��e�;}o�0A�1�!���^3�Ʌ���&�����c�#:�7 ��T'�$���>�H���@��oy�Y,e1�_�v�� �a`|�]��CID�!���+1�o�a3��8R
�8A�5~��rS�F�V��j�2]�o� 4�`;,���+��
^zA]t����u�Ua��_lzq�_�%�l`묁M�Ƈ��P�W�t��c ��W�|�X��x��n��t��.�������``�\�~�p�x[�?�B��L�=ɣ��I	=�F�j��ԧb�/ D��V@_�I�J�JCS.,)3*1�Z�ȋ���Uv�,�-����QZ�̍�A��G�B�ߤ�V���a��W�-��qu�h��U�]����J�d�h��*�5�����B��YN%����
_i���″{"����
!�S�>�$��o��_-���rl<H��4�jv\UxP֧p��"�a��,�w%��ʱ�Ǥ�	-s�rh*Ew`�^�ߥ@/Q[!̇ <p�#��x!�(1�2Re?}�.ب�n�9��%�������x�#�+�p������$u���cPN]� �_�5�5�n6?�l��kf�:�k��{�γb ��*3Q3�z�-�z3�փ����tKڼr�0��k���?��d�~��_���;:��}��_�d7�o��/�����j��שּׂ�z|%\�[.�O �c�x��G�h
�m�5�*T�W*	:y]�(N{�
�Ƞkɪ0#>$=٣T�H%<!Gɕ���:�s��ep0�~���xʝ򐊖���@�6Dz�IF��NW��4M4�}�� �2����~_����8V�����8_fq���\�h�T�!�w��a��*�\jQ�ҍ����6��tSwL[�m��k��A�k�i����q���f]Z����<\$~�`���jK�7ya	1�Y���r�3H�X7���`qh�.w�> �}�e��eԁ ��MI��q�T�JIK��L/��C�8T��X��q�o���e@�E�a"�ၞ�4 3cc��uK '}��OYg ��"�,s�_p�j׃�s�<Ƚ,8�V,jP| b�a@��h��|����w=?�ī��(�)�Q���sf;�KKخU�pi&�ԋ�ΔϥV��o���);�Z�����T���^���sYsl�qt�(4�7+��EQ�&]���\}Cm�a�h�X���&w�+�*�w��ܢE�J���ph��y��%"Htk�({T��[��LY�HE��\��Q��[�(��� �P옌����b�#��9)�ʾ#�M@G������nG�Se��釄� �����E8��Ô�j��>��~0�}|	@�U�g��pA9\԰D�K�@�)f�12�P^tM�)��o�C�×U��
H��¿21�Ix'-�z��R��W�^f9,7C�ՍN���g�Xl�c�m�V�]^--����u���놻��c^�j���϶	깺�@���"��Pu�J��|�ƂV݊�!���Jv��t�(>)��$�G�97�_d��4aNj�k�@��^�����h?��a)^�h
�3��! �)!bR4C
h����ٰ"������(�x�}A�1G����?,po�B��ryv�7�D�1�� @x����M��~0���v�[�����S;�GbJS&J�x ���EP�s������b�`�,LG�#�]=�����,:!��+$� (�A����́iA���_*BYE�#��%t2j[�����ꘙ���#5����"�.�'[�������"n���vѲ�|+{����_���lGҊQ(�0b?�?n3]�~��8j���:�������<�V�)��M0��� z  ���3����R�Bt����~�]45ӈ��-u�TK]�9�k�M._<=�#���t@��띪W��F��CD�Gh���>�(�m�iѭ�!�:$�XSݕSM�Ӫ-����*�y�1Js��fA���y}�"�U���)��
�P#U�'>���/�{>%�)P������v�~H�槾�Q��j�~�ny�lr��i*�"L��J�������k���yv�[��.�߯���L�����,�OQg��+�F��)s�Ճ���2��eR��Ԋ�����-��d]lv{�͑���jK�_�K
"�SG��!*M��ĉ�R�]� Uz U6�<$ZJ{��c��k�R�ʼ��2��jQ��&���8�g�MU~����.�ҕ�8��p&��>��^��~�m�@�塰�o|&�qqM">�"���+H@��&"Gz�ښa�S]��y�u���+�,�BfX=�+�;�=��V��+�w��ɤ���}L%��eO$��J[��3K�BO/�>��t器�t���X���-�r���:�x<k�����.u<�%�=��r��#l���+�_�g������K�=��,�
g��]H]6\�&�~�ŋG�%VN[Ü�-�½vxU��lN;�bg`j�4��C�%*B��>�X`�߉2$m��v�=s_[�M�y���h	�E��ϊ�pv�� ��GJG��bʇ�`��o�:��#�`Bv�P�U�w�R�{)����45��������x�P��RM�:�髋7fz�뵚��7s�Iy��MU�&w�vlN�Â���=��Ͳ@}$Ľ�p�RL�
����3SE�(�-
F�.W���B��Қ�,Z����^�8�e��T�ul@}GZ��o�0ba�(7�Yv\��Lb��C�e�5��}Q�����]_gz�ҙ�ʡ;��s7�!����C�1׆�%��`k�Y9��ET�N)�t�c��a����MD� ����S�r�0�{���<+���7Qs^8ӹ�C���'ST��a��?�B�K_����c[I�>W��h��6���.nğ�H���N��������p ��`0�j�Āv]��us'����`��HYʮ}�P�ɐ�>��u���^ީT<ĹO��K䂫T]�؋3ޠ[��q^�*P�C)$
�P�~J`�Up�f��2�|��OP+�T��  ;%����Q�}PEO�_dE�Y����2�K��a�X@lu㕋8��Н�i/���5K�E��Հ�V���bqJ�r E
���OG��7V�25}��r0+x!�T�jK�@�~�aL9�;���%|���/7�C�Q�3��9>��}�<�����V�ꆆYm���V�$o�����\+����uN�
V^v<TW�g�_E	��O}N?��׷ޞ]8_ʰ��҇��a�q-���f��!�V��`͋;��C^O<�-HT^�Y��$��9��1�{�#�����볩��%�_�rY��ࣴ"C�b-��214�򂇴�仐�&�SqU�?�9���˞s*�dЍ�<��RK����S���tRk|�R��B
��1&�a�/Sϗ8�[+�n��Q5�\�6��#GV� 4s���u��Mu��V��l�=l��K%d�o�f�,��?䰥���k�v�5      �   F  x��T�n�@]�_qוlOܐ%5QS�1���J�X��-�IT�Ew��B��F�,�D(HD�³`1&�1��#Uy�J��Ҍf�Ϲ�̱�����F�CYc,�ȄG��d���#ܜM!��Eq(��v�1���ɏ�Z\�S�m9>N�D5s����dr� �{��tq�T�ql9s��! ��w���>�0��M�1�寡5�J����a��1<	��0k�l =�|dD���X1�@�%A�S� ��i*���V$	�1*)���3&D�8�jd���M����F���0�m�
�_,s1�b������GK��D	EH~��ķH�����˙C��Y��L�t�w�I?��B�564�����x��#�Mɽ���IL�F�(�j��y�V��"�ky4�m����õ6��^�������;А�t֜��V}6��뷛u�e�N'\릩��z��UXO��}�;\���at��&8�n�IG&�pu�V��1�U��۠�m̳Xf��z'��RځH�Z���Xh�vt-3��/����K>A�4�U�����0*���?�nUU5�N      �   5   x�3���q�v���2�p}�]\�C��b�@��QG_O?�H� ޣ-      �   �   x���=!�z8��0���lB4Y�0Rx�e;
�����+�;��|�nҥ�5do�k	�_����{y&C�7R�C7�L��u'�r��%���$�$u�l��5i�In�\��M��-��-�<��r�J���Y      �   ,   x�3�4�2bs � bK 64 �@Ә�H�pq��qqq ��      �   �  x�m����V�k��)�>`�����48��xl�[�I�`�(��H��rV{�����*��p
��=��~P$-QF0.C�Y�H�0˙�,(T'5D��� �5�	�P���@T�D�~jQ@�;��A4�?���|����mؑ��¼}a�hU��ݞ$�j�D�b�#g���5�	z�EH���ݣ�,&�̧��4C�ҩf���a�j_���]���i��`��ѓ�Y�z��������f�n=ק�S��x��5ƇB���(V\��γ�����.,vB�>vF��mIҐ�[�qM��;`��~t�FS���?���������/@bD��\wVPFڞ.�>���˯$}P�E��h�����K�R���yÆL����$xQ�|
�Hi+Vޕ�y�+�`�<��_^� W�ò���N��ז�tx�V�|�J"���0�+�\o��0��h^I�x#)G�9�m)����Yh���]Y�F�sዮM��ή�I�����AE/�XZ���Owz( }���>��;lvm��A�h�s�Q�3^�}�Vb��=		����7Ԗfc�hv�4y�`(���[���緿::�f�r?��vw[r��{��J��&^2G'XtkɎ:V��}�!V^�Õ�t|���/�O?]S��e�wy>��8r�"Z%L2�0[~n��O�:�����ͥ"��OX���/Q7�?������.c�     