PGDMP  ,    $                |            tecnica_api    12.18    16.2                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16393    tecnica_api    DATABASE     �   CREATE DATABASE tecnica_api WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE tecnica_api;
                postgres    false                        2615    2200    public    SCHEMA     2   -- *not* creating schema, since initdb creates it
 2   -- *not* dropping schema, since initdb creates it
                postgres    false                       0    0    SCHEMA public    ACL     Q   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;
                   postgres    false    6            �            1259    16425    prestamo    TABLE     �   CREATE TABLE public.prestamo (
    id bigint NOT NULL,
    fecha_maxima_devolucion character varying(255),
    identi_usuario character varying(10),
    isbn character varying(10),
    tipo_usuario integer NOT NULL
);
    DROP TABLE public.prestamo;
       public         heap    postgres    false    6            �            1259    16423    prestamo_id_seq    SEQUENCE     x   CREATE SEQUENCE public.prestamo_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.prestamo_id_seq;
       public          postgres    false    6    203            	           0    0    prestamo_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.prestamo_id_seq OWNED BY public.prestamo.id;
          public          postgres    false    202            
           2604    16428    prestamo id    DEFAULT     j   ALTER TABLE ONLY public.prestamo ALTER COLUMN id SET DEFAULT nextval('public.prestamo_id_seq'::regclass);
 :   ALTER TABLE public.prestamo ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203                      0    16425    prestamo 
   TABLE DATA           c   COPY public.prestamo (id, fecha_maxima_devolucion, identi_usuario, isbn, tipo_usuario) FROM stdin;
    public          postgres    false    203   �       
           0    0    prestamo_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.prestamo_id_seq', 4, true);
          public          postgres    false    202            �
           2606    16430    prestamo prestamo_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.prestamo
    ADD CONSTRAINT prestamo_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.prestamo DROP CONSTRAINT prestamo_pkey;
       public            postgres    false    203               J   x�eɻ�0�����g>%R6H��s@��"�}a8��Sed��s�}f�y�+}/�5�`��ѣ`�gs�op�     