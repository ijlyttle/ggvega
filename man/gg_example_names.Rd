% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/example.R
\name{gg_example_names}
\alias{gg_example_names}
\alias{gg_example}
\title{Use ggplot examples}
\usage{
gg_example_names()

gg_example(example = NULL)
}
\arguments{
\item{example}{\code{character}, name of the example,
\code{NULL} prints message containing names of all examples}
}
\value{
\describe{
\item{\code{gg_example_names()}}{\code{character}, names of examples}
\item{\code{gg_example()}}{S3 object with classes \code{gg} and \code{ggplot};
a ggplot2 object, identified by \code{example}}
}
}
\description{
This package has a series of example files that hightlight the capabilities
of ggvega. As more capabilities are developed, more examples will be added.
}
\examples{
  library("ggplot2")
  gg_example_names()
  gg_example_path("scatterplot-iris")
  gg_example("scatterplot-iris")
  gg_example("scatterplot-iris") \%>\% as_vegaspec()
}
