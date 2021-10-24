import Vue from "vue";

import ArticleImage from '@/components/atoms/article-image';
import Author from '@/components/atoms/author';
import Avatar from '@/components/atoms/avatar';
import LazyImage from "@/components/atoms/lazy-image";
import Tag from '@/components/atoms/tag';

import Card from "@/components/card";
import Container from '@/components/container'
import Grid from "@/components/grid";
import Navs from "@/components/navs";
import Sidebar from "@/components/sidebar";
import PrevNextArticle from '@/components/prev-next-article';
import ContactList from '@/components/contact-list';
import CustomFooter from '@/components/custom-footer';
import BlogItem from '@/components/blog-item';
import TableOfContent from '@/components/table-of-content';

Vue.component("article-image", ArticleImage);
Vue.component("author", Author);
Vue.component("avatar", Avatar);
Vue.component("lazy-image", LazyImage);
Vue.component("tag", Tag)
Vue.component("card", Card);
Vue.component("container", Container);
Vue.component("grid", Grid);
Vue.component("navs", Navs);
Vue.component("sidebar", Sidebar);
Vue.component("prev-next-article", PrevNextArticle);
Vue.component("contact-list", ContactList);
Vue.component("custom-footer", CustomFooter);
Vue.component("blog-item", BlogItem);
Vue.component("table-of-content", TableOfContent);
