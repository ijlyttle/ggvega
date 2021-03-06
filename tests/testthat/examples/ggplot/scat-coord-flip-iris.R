# standard scatterplot, aesthetics defined in ggplot and in layers
#
ggplot(head(iris, 1), aes(x = Sepal.Width, y = Sepal.Length)) +
  geom_point(aes(color = Species)) +
  coord_flip()
