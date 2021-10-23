import Vue from "vue";

import ArticleImage from '@/components/atoms/article-image';
import Avatar from '@/components/atoms/avatar';
import LazyImage from "@/components/atoms/lazy-image";
import Tag from '@/components/atoms/tag';

import Card from "@/components/card";
import Container from '@/components/container'
import Grid from "@/components/grid";
import Navs from "@/components/navs";
import Sidebar from "@/components/sidebar";

Vue.component("article-image", ArticleImage);
Vue.component("avatar", Avatar);
Vue.component("lazy-image", LazyImage);
Vue.component("tag", Tag)
Vue.component("card", Card);
Vue.component("container", Container);
Vue.component("grid", Grid);
Vue.component("navs", Navs);
Vue.component("sidebar", Sidebar);