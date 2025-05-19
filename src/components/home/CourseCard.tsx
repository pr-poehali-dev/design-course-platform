
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export type CourseTag = {
  label: string;
  bgColor: string;
  textColor: string;
};

export type CourseCardProps = {
  title: string;
  description: string;
  image: string;
  tags: CourseTag[];
  duration: string;
  students: number;
  price: number;
  originalPrice?: number;
};

const CourseCard = ({
  title,
  description,
  image,
  tags,
  duration,
  students,
  price,
  originalPrice
}: CourseCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="mb-4 h-48 rounded-md overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex mb-2">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              className={`${tag.bgColor} ${tag.textColor} hover:${tag.bgColor.replace('bg-', 'bg-')}/90 ${index > 0 ? 'ml-2' : ''}`}
            >
              {tag.label}
            </Badge>
          ))}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Icon name="Clock" className="mr-2 h-4 w-4" />
          <span>{duration}</span>
          <Icon name="Users" className="ml-4 mr-2 h-4 w-4" />
          <span>{students} студент{students % 10 === 1 && students % 100 !== 11 ? '' : students % 10 >= 2 && students % 10 <= 4 && (students % 100 < 10 || students % 100 >= 20) ? 'а' : 'ов'}</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div>
          {originalPrice && (
            <span className="text-gray-500 text-sm line-through mr-2">{originalPrice.toLocaleString()} ₽</span>
          )}
          <span className="text-purple-600 font-semibold">{price.toLocaleString()} ₽</span>
        </div>
        <Button variant="outline">Подробнее</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
