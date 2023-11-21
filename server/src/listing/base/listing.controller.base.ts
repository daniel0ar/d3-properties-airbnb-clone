/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { ListingService } from "../listing.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ListingCreateInput } from "./ListingCreateInput";
import { ListingWhereInput } from "./ListingWhereInput";
import { ListingWhereUniqueInput } from "./ListingWhereUniqueInput";
import { ListingFindManyArgs } from "./ListingFindManyArgs";
import { ListingUpdateInput } from "./ListingUpdateInput";
import { Listing } from "./Listing";
import { TripFindManyArgs } from "../../trip/base/TripFindManyArgs";
import { Trip } from "../../trip/base/Trip";
import { TripWhereUniqueInput } from "../../trip/base/TripWhereUniqueInput";
import { WishlistFindManyArgs } from "../../wishlist/base/WishlistFindManyArgs";
import { Wishlist } from "../../wishlist/base/Wishlist";
import { WishlistWhereUniqueInput } from "../../wishlist/base/WishlistWhereUniqueInput";

export class ListingControllerBase {
  constructor(
    protected readonly service: ListingService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @swagger.ApiBearerAuth()
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Listing })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: ListingCreateInput): Promise<Listing> {
    return await this.service.create({
      data: {
        ...data,

        listingCreatedBy: {
          connect: data.listingCreatedBy,
        },
      },
      select: {
        createdAt: true,
        description: true,
        id: true,

        listingCreatedBy: {
          select: {
            id: true,
          },
        },

        locationData: true,
        locationType: true,
        mapData: true,
        photos: true,
        placeAmeneties: true,
        placeSpace: true,
        placeType: true,
        price: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  // @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Listing] })
  @ApiNestedQuery(ListingFindManyArgs)
  /*@nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "any",
  })*/
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Listing[]> {
    const {
      userId,
      beds,
      guests,
      bathrooms,
      country,
      startDate,
      endDate,
      locationType,
    } = request.query;
    const query: any = {
      userId: undefined,
      locationType: undefined,
      placeSpace: {},
      locationData: {},
    };

    if (userId) query.listingCreatedBy = { id: userId };
    if (locationType) query.locationType = locationType;
    if (beds) query.placeSpace = { path: ["beds"], gte: +beds };
    if (bathrooms) query.placeSpace = { path: ["bathrooms"], gte: +bathrooms };
    if (guests) query.placeSpace = { path: ["guests"], gte: +guests };
    if (country) query.locationData = { path: ["country"], equals: country };

    if (startDate && endDate) {
      query.NOT = {
        trips: {
          some: {
            OR: [
              {
                AND : [
                  {
                    tripInfo: {
                      path: ["endDate"],
                      gte: startDate,
                    },
                  },
                  {
                    tripInfo: {
                      path: ["startDate"],
                      lte: startDate,
                    },
                  },
                ],
              },
              {
                AND : [
                  {
                    tripInfo: {
                      path: ["startDate"],
                      lte: endDate,
                    },
                  },
                  {
                    tripInfo: {
                      path: ["endDate"],
                      gte: endDate,
                    },
                  },
                ],
              },
            ],

            /*
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate },
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate },
              },
            ],*/
          },
        },
      };
    }
    console.log(query);
    return this.service.findMany({
      where: query,
      select: {
        createdAt: true,
        description: true,
        id: true,

        listingCreatedBy: {
          select: {
            id: true,
          },
        },

        locationData: true,
        locationType: true,
        mapData: true,
        photos: true,
        placeAmeneties: true,
        placeSpace: true,
        placeType: true,
        price: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  // @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Listing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  /* @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "read",
    possession: "own",
  }) */
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<Listing | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,

        listingCreatedBy: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        },

        locationData: true,
        locationType: true,
        mapData: true,
        photos: true,
        placeAmeneties: true,
        placeSpace: true,
        placeType: true,
        price: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @swagger.ApiBearerAuth()
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Listing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() data: ListingUpdateInput
  ): Promise<Listing | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          listingCreatedBy: {
            connect: data.listingCreatedBy,
          },
        },
        select: {
          createdAt: true,
          description: true,
          id: true,

          listingCreatedBy: {
            select: {
              id: true,
            },
          },

          locationData: true,
          locationType: true,
          mapData: true,
          photos: true,
          placeAmeneties: true,
          placeSpace: true,
          placeType: true,
          price: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @swagger.ApiBearerAuth()
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Listing })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<Listing | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,

          listingCreatedBy: {
            select: {
              id: true,
            },
          },

          locationData: true,
          locationType: true,
          mapData: true,
          photos: true,
          placeAmeneties: true,
          placeSpace: true,
          placeType: true,
          price: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  // @swagger.ApiBearerAuth()
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/trips")
  @ApiNestedQuery(TripFindManyArgs)
  /* @nestAccessControl.UseRoles({
    resource: "Trip",
    action: "read",
    possession: "any",
  }) */
  async findManyTrips(
    @common.Req() request: Request,
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<Trip[]> {
    const query = plainToClass(TripFindManyArgs, request.query);
    const results = await this.service.findTrips(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        tripInfo: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/trips")
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  async connectTrips(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: TripWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trips: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @swagger.ApiBearerAuth()
  @common.UseGuards(
    defaultAuthGuard.DefaultAuthGuard,
    nestAccessControl.ACGuard
  )
  @common.Patch("/:id/trips")
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  async updateTrips(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: TripWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trips: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/trips")
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  async disconnectTrips(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: TripWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trips: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/wishlists")
  @ApiNestedQuery(WishlistFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Wishlist",
    action: "read",
    possession: "any",
  })
  async findManyWishlists(
    @common.Req() request: Request,
    @common.Param() params: ListingWhereUniqueInput
  ): Promise<Wishlist[]> {
    const query = plainToClass(WishlistFindManyArgs, request.query);
    const results = await this.service.findWishlists(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        listing: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/wishlists")
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  async connectWishlists(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: WishlistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wishlists: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/wishlists")
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  async updateWishlists(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: WishlistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wishlists: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/wishlists")
  @nestAccessControl.UseRoles({
    resource: "Listing",
    action: "update",
    possession: "any",
  })
  async disconnectWishlists(
    @common.Param() params: ListingWhereUniqueInput,
    @common.Body() body: WishlistWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      wishlists: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
